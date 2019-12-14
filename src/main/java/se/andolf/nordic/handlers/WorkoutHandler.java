package se.andolf.nordic.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.workouts.DagensResource;
import se.andolf.nordic.resources.workouts.FitnessResource;
import se.andolf.nordic.resources.workouts.PerformanceResource;

import java.util.List;

@Component
public class WorkoutHandler {

    private final DagensResource dagensResource;
    private final FitnessResource fitnessResource;
    private final PerformanceResource performanceResource;

    @Autowired
    public WorkoutHandler(DagensResource dagensResource, FitnessResource fitnessResource, PerformanceResource performanceResource) {
        this.dagensResource = dagensResource;
        this.fitnessResource = fitnessResource;
        this.performanceResource = performanceResource;
    }

    public Flux<List<WorkoutResponse>> stream(String id) {
        if (id.equals("dagens"))
            return dagensResource.stream(id);
        else if (id.equals("fitness"))
            return fitnessResource.stream(id);
        else if (id.equals("performance"))
            return performanceResource.stream(id);
        else
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }

    public Mono<List<WorkoutResponse>> get() {
        return  dagensResource.get();
    }
}
