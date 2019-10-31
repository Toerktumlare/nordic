package se.andolf.nordic.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.workouts.DagensResource;

import java.util.List;

@Component
public class WorkoutHandler {

    private final DagensResource dagensResource;

    @Autowired
    public WorkoutHandler(DagensResource dagensResource) {
        this.dagensResource = dagensResource;
    }

    public Flux<List<WorkoutResponse>> stream(String id) {
        return dagensResource.stream(id);
    }

    public Mono<List<WorkoutResponse>> get() {
        return  dagensResource.get();
    }
}
