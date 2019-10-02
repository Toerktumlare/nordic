package se.andolf.nordic.handlers;

import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.Sheet;
import se.andolf.nordic.models.WorkoutType;
import se.andolf.nordic.models.response.WorkoutDay;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.SheetResource;
import se.andolf.nordic.utils.DateUtils;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class WorkoutHandler {

    private final SheetResource sheetResource;

    public WorkoutHandler(SheetResource sheetResource){
        this.sheetResource = sheetResource;
    }

    public Mono<List<WorkoutResponse>> get() {

        final List<String> ranges = new ArrayList<>();

        final int currentWeek = DateUtils.getCurrentWeek();

        final int startingCell = Sheet.YEAR_START_CELL + ((currentWeek - 1) * Sheet.ONE_WEEK_CELL_COUNT);

        final List<LocalDate> weekDates = DateUtils.datesListOfCalendarWeek(LocalDate.now().getYear(), currentWeek);

        int currentRow = startingCell + Sheet.WEEKDAY_START_OFFSET;
        for (int i = 0; i < Sheet.WEEK_LENGTH; i++) {
            ranges.add((Sheet.START_COLUMN + currentRow + ":" + Sheet.END_COLUMN + currentRow));
            ranges.add((Sheet.START_COLUMN + (currentRow + 1) + ":" + Sheet.END_COLUMN + (currentRow + 1)));
            currentRow+=2;
        }

        final List<WorkoutResponse> workoutResponses = new ArrayList<>();

        return sheetResource.getById("12lWiSpQypDa2l3QB6hhFcvalH9DmUvTJzWrDBm7N8-c", ranges)
                .flatMap(valuesRanges -> {

                    final WorkoutResponse.WorkoutResponseBuilder workoutResponseBuilder = WorkoutResponse.builder();
                    workoutResponseBuilder.name(WorkoutType.DAGENS_PASS);
                    workoutResponseBuilder.week(currentWeek);
                    final List<WorkoutDay> workoutDays = new ArrayList<>();

                    int cellIndex = 0;
                    for (int i = 0; i < weekDates.size(); i++) {

                        final List<String> workouts = valuesRanges.get(cellIndex).getValues()
                                .stream()
                                .flatMap(Collection::stream)
                                .map(o -> (String) o)
                                .skip(3)
                                .filter(s -> !s.isEmpty())
                                .collect(Collectors.toList());

                        final List<String> instructions = valuesRanges.get(cellIndex+1).getValues()
                                .stream()
                                .flatMap(Collection::stream)
                                .map(o -> (String) o)
                                .skip(3)
                                .filter(s -> !s.isEmpty())
                                .collect(Collectors.toList());

                        final WorkoutDay workoutDay = WorkoutDay.builder()
                                .date(weekDates.get(i)
                                        .toEpochSecond(LocalTime.NOON, ZoneOffset.UTC))
                                .workouts(workouts)
                                .instructions(instructions)
                                .build();

                        workoutDays.add(workoutDay);

                        cellIndex+=2;

                    }
                    workoutResponseBuilder.workoutDays(workoutDays);
                    workoutResponses.add(workoutResponseBuilder.build());

                    return Mono.just(workoutResponses);
                });
    }
}
