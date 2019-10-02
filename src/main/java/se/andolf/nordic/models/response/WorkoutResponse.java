package se.andolf.nordic.models.response;

import lombok.Builder;
import lombok.Value;
import se.andolf.nordic.models.WorkoutType;

import java.util.List;

@Value
@Builder
public class WorkoutResponse {

    private WorkoutType name;
    private int week;
    private List<WorkoutDay> workoutDays;

}
