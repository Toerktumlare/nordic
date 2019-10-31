package se.andolf.nordic.resources.workouts;

import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;
import reactor.core.publisher.ReplayProcessor;
import se.andolf.nordic.models.response.WorkoutResponse;

import java.util.List;

public abstract class AbstractWorkoutResource {

    final ReplayProcessor<List<WorkoutResponse>> replayProcessor;
    final FluxSink<List<WorkoutResponse>> sink;

    AbstractWorkoutResource(){
        this.replayProcessor = ReplayProcessor.cacheLast();;
        sink = replayProcessor.sink();
    }

    public abstract Mono<List<WorkoutResponse>> get();

    public abstract Flux<List<WorkoutResponse>> stream(String id);

    public abstract Mono<Void> push(List<WorkoutResponse> workoutResponses);

}
