package se.andolf.nordic.resources.workouts;

import org.springframework.http.codec.ServerSentEvent;
import org.springframework.scheduling.annotation.Scheduled;
import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.SheetResource;

import java.util.List;

public class PerformanceResource extends AbstractWorkoutResource {

    public PerformanceResource(WorkoutConfiguration workoutConfiguration, SheetResource sheetResource) {
        super(workoutConfiguration, sheetResource);
    }

    @Scheduled(fixedDelay = 300000)
    private void fetchSheet() {
        get().doOnNext(workoutResponses -> sink.next(ServerSentEvent.<List<WorkoutResponse>>builder()
                .data(workoutResponses)
                .build()))
                .subscribe();
    }
}
