package se.andolf.nordic.resources.workouts;

import org.springframework.scheduling.annotation.Scheduled;
import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.resources.SheetResource;

public class PerformanceResource extends AbstractWorkoutResource {

    public PerformanceResource(WorkoutConfiguration workoutConfiguration, SheetResource sheetResource) {
        super(workoutConfiguration, sheetResource);
    }

    @Scheduled(fixedDelay = 30000)
    private void fetchSheet() {
        get().doOnNext(sink::next).subscribe();
    }
}
