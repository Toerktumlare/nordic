package se.andolf.nordic.models.response;

import lombok.Builder;
import lombok.Value;
import se.andolf.nordic.models.WorkoutType;

import java.util.List;

@Value
@Builder
public class WorkoutClass {

    private WorkoutType name;
    private long timestamp;
    private List<Participant> participants;
}
