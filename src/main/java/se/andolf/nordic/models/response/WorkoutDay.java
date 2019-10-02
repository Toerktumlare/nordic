package se.andolf.nordic.models.response;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class WorkoutDay {
    private long date;
    private List<String> workouts;
    private List<String> instructions;
}
