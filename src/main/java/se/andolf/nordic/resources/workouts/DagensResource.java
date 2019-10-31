package se.andolf.nordic.resources.workouts;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.WorkoutType;
import se.andolf.nordic.models.response.WorkoutDay;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.SheetResource;
import se.andolf.nordic.utils.DateUtils;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Slf4j
public class DagensResource extends AbstractWorkoutResource {

    private static int YEAR_START_CELL = 2982;
    private static int ONE_WEEK_CELL_COUNT = 16;
    private static String START_COLUMN = "A";
    private static String END_COLUMN = "J";
    private static int WEEK_LENGTH = 7;
    private static int WEEKDAY_START_OFFSET = 2;

    private final SheetResource sheetResource;

    @Autowired
    public DagensResource(SheetResource sheetResource){
        this.sheetResource = sheetResource;
    }

    @PostConstruct
    public void init() {
        log.info("Fetching data from google sheets and filling Dagens ReplayProcessor");
        get().doOnNext(sink::next).subscribe();
    }

    @Override
    public Mono<List<WorkoutResponse>> get() {

        final List<String> ranges = getRanges();
        final List<WorkoutResponse> workoutResponses = new ArrayList<>();

        return sheetResource.getById("12lWiSpQypDa2l3QB6hhFcvalH9DmUvTJzWrDBm7N8-c", ranges)
                .flatMap(valuesRanges -> {

                    final int currentWeek = DateUtils.getCurrentWeek();
                    final WorkoutResponse.WorkoutResponseBuilder workoutResponseBuilder = WorkoutResponse.builder()
                            .name(WorkoutType.DAGENS_PASS)
                            .week(DateUtils.getCurrentWeek());

                    final List<LocalDate> weekDates = DateUtils.getDatesForWeek(currentWeek);
                    final List<WorkoutDay> workoutDays = new ArrayList<>();

                    int cellIndex = 0;
                    for (LocalDate weekDate : weekDates) {

                        final List<String> workouts = valuesRanges.get(cellIndex).getValues()
                                .stream()
                                .flatMap(Collection::stream)
                                .map(o -> (String) o)
                                .skip(3)
                                .filter(s -> !s.isEmpty())
                                .collect(Collectors.toList());

                        final List<String> instructions = valuesRanges.get(cellIndex + 1).getValues()
                                .stream()
                                .flatMap(Collection::stream)
                                .map(o -> (String) o)
                                .skip(3)
                                .filter(s -> !s.isEmpty())
                                .collect(Collectors.toList());

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

    @Override
    public Flux<List<WorkoutResponse>> stream(String id) {
        return replayProcessor;
    }

    @Override
    public Mono<Void> push(List<WorkoutResponse> workoutResponses) {
        sink.next(workoutResponses).complete();
        return Mono.empty();
    }

    private List<String> getRanges() {
        final int currentWeek = DateUtils.getCurrentWeek();
        final int startingCell = YEAR_START_CELL + ((currentWeek - 1) * ONE_WEEK_CELL_COUNT);
        int currentRow = startingCell + WEEKDAY_START_OFFSET;

        final List<String> ranges = new ArrayList<>();

        for (int i = 0; i < WEEK_LENGTH; i++) {
            ranges.add((START_COLUMN + currentRow + ":" + END_COLUMN + currentRow));
            ranges.add((START_COLUMN + (currentRow + 1) + ":" + END_COLUMN + (currentRow + 1)));
            currentRow+=2;
        }

        return ranges;
    }

    @Scheduled(fixedDelay = 10000)
    private void fetchSheet() {
        get().doOnNext(sink::next).subscribe();
    }
}
