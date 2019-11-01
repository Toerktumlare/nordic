package se.andolf.nordic.resources.workouts;

import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.resources.SheetResource;

public class FitnessResource extends AbstractWorkoutResource {

    public FitnessResource(WorkoutConfiguration workoutConfiguration, SheetResource sheetResource) {
        super(workoutConfiguration, sheetResource);
    }
}
