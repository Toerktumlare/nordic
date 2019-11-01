package se.andolf.nordic.resources.workouts;

import org.springframework.scheduling.annotation.Scheduled;
import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.resources.SheetResource;

public class FitnessResource extends AbstractWorkoutResource {

    public FitnessResource(WorkoutConfiguration workoutConfiguration, SheetResource sheetResource) {
        super(workoutConfiguration, sheetResource);
    }

    @Scheduled(fixedDelay = 10000)
    private void fetchSheet() {
        get().doOnNext(sink::next).subscribe();
    }
}
