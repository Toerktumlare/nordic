package se.andolf.nordic.resources.workouts;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.codec.ServerSentEvent;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;
import reactor.core.publisher.ReplayProcessor;
import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.models.response.WorkoutDay;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.SheetResource;
import se.andolf.nordic.utils.DateUtils;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
public abstract class AbstractWorkoutResource {

    // TODO: Refactor away replayprocessor
    final ReplayProcessor<ServerSentEvent<List<WorkoutResponse>>> replayProcessor;
    final FluxSink<ServerSentEvent<List<WorkoutResponse>>> sink;
    final SheetResource sheetResource;
    final WorkoutConfiguration config;

    AbstractWorkoutResource(WorkoutConfiguration workoutConfiguration, SheetResource sheetResource){
        this.sheetResource = sheetResource;
        this.config = workoutConfiguration;
        this.replayProcessor = ReplayProcessor.cacheLast();
        sink = replayProcessor.sink();
    }

    public Mono<List<WorkoutResponse>> get() {

        final List<String> ranges = getRanges();
        final List<WorkoutResponse> workoutResponses = new ArrayList<>();

        return sheetResource.getById(config.getSheetId(), ranges)
                .flatMap(valuesRanges -> {

                    final int currentWeek = DateUtils.getCurrentWeek();
                    final WorkoutResponse.WorkoutResponseBuilder workoutResponseBuilder = WorkoutResponse.builder()
                            .name(config.getWorkoutType())
                            .week(DateUtils.getCurrentWeek());

                    final List<LocalDate> weekDates = DateUtils.getDatesForWeek(currentWeek);
                    final List<WorkoutDay> workoutDays = new ArrayList<>();

                    int cellIndex = 0;
                    for (LocalDate weekDate : weekDates) {

                        final List<String> workouts = Optional.ofNullable(valuesRanges.get(cellIndex).getValues())
                                .map(lists -> lists.stream()
                                        .flatMap(Collection::stream)
                                        .map(o -> (String) o)
                                        .skip(3)
                                        .filter(s -> !s.isEmpty())
                                        .collect(Collectors.toList()))
                                .orElse(Collections.emptyList());

                        List<String> instructions = Collections.emptyList();
                        if(valuesRanges.get(cellIndex + 1).getValues() != null) {
                            instructions = valuesRanges.get(cellIndex + 1).getValues()
                                    .stream()
                                    .flatMap(Collection::stream)
                                    .map(o -> (String) o)
                                    .skip(3)
                                    .filter(s -> !s.isEmpty())
                                    .collect(Collectors.toList());
                        }

                        final WorkoutDay workoutDay = WorkoutDay.builder()
                                .date(weekDate
                                        .toEpochSecond(LocalTime.NOON, ZoneOffset.UTC))
                                .workouts(workouts)
                                .instructions(instructions)
                                .build();

                        workoutDays.add(workoutDay);

                        cellIndex += 2;

                    }
                    workoutResponseBuilder.workoutDays(workoutDays);
                    workoutResponses.add(workoutResponseBuilder.build());

                    return Mono.just(workoutResponses);
                });
    }

    public Flux<ServerSentEvent<List<WorkoutResponse>>> stream() {
        return replayProcessor;
    }

    public Mono<Void> push(List<WorkoutResponse> workoutResponses) {
        sink.next(ServerSentEvent.<List<WorkoutResponse>>builder().data(workoutResponses).build());
        return Mono.empty();
    }

    private List<String> getRanges() {
        final LocalDate referenceDate = LocalDate.parse(config.getReferenceDate());
        final int weeksPassed = (int) ChronoUnit.WEEKS.between(referenceDate, LocalDate.now());
        final int currentWeek = DateUtils.getCurrentWeek();
        final int startingCell = config.getYearStartCell() + ((weeksPassed + currentWeek -1) * config.getOneWeakCellCount());
        int currentRow = startingCell + config.getWeekdayStartOffset();

        final List<String> ranges = new ArrayList<>();

        for (int i = 0; i < config.getWeekLength(); i++) {
            ranges.add((config.getTabName() + "!" + config.getStartColumn() + currentRow + ":" + config.getEndColumn() + currentRow));
            ranges.add((config.getTabName() + "!" + config.getStartColumn() + (currentRow + 1) + ":" + config.getEndColumn() + (currentRow + 1)));
            currentRow+=2;
        }

        return ranges;
    }

}
