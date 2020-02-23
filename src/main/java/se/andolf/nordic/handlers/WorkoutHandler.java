package se.andolf.nordic.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.codec.ServerSentEvent;
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

    public Flux<ServerSentEvent<List<WorkoutResponse>>> stream(String id) {
        switch (id) {
            case "dagens":
                return dagensResource.stream();
            case "fitness":
                return fitnessResource.stream();
            case "performance":
                return performanceResource.stream();
            default:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    public Mono<List<WorkoutResponse>> get() {
        return  dagensResource.get();
    }
}
