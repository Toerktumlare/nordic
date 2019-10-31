package se.andolf.nordic.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.Command;
import se.andolf.nordic.models.CommandType;
import se.andolf.nordic.resources.workouts.DagensResource;

@Component
public class CacheHandler {

    private final DagensResource dagensResource;

    @Autowired
    public CacheHandler(DagensResource dagensResource) {
        this.dagensResource = dagensResource;
    }

    public Mono<Void> execute(Mono<Command> commandMono) {
        return commandMono.flatMap(command ->
                resolve(command.getCommand()));
    }

    private Mono<? extends Void> resolve(CommandType command) {
        switch (command) {
            case CLEAR_FETCH_AND_PUSH:
                return dagensResource.get()
                        .flatMap(dagensResource::push);
            default:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
