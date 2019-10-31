package se.andolf.nordic.resources.workouts;

import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.SheetResource;

import java.util.List;

public class FitnessResource extends AbstractWorkoutResource {

    private final SheetResource sheetResource;

    @Autowired
    public FitnessResource(SheetResource sheetResource){
        this.sheetResource = sheetResource;
    }

    @Override
    public Mono<List<WorkoutResponse>> get() {
        return null;
    }

    @Override
    public Flux<List<WorkoutResponse>> stream(String id) {
        return null;
    }

    @Override
    public Mono<Void> push(List<WorkoutResponse> workoutResponses) {
        return null;
    }
}
