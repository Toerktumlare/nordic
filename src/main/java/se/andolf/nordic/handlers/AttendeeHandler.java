package se.andolf.nordic.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.response.ListResponse;
import se.andolf.nordic.models.response.WorkoutClass;
import se.andolf.nordic.resources.participants.DagensParticipantResource;
import se.andolf.nordic.resources.participants.FitnessParticipantResource;
import se.andolf.nordic.resources.participants.CompetitionParticipantResource;

@Component
public class AttendeeHandler {


    private final DagensParticipantResource dagensParticipantResource;
    private final FitnessParticipantResource fitnessParticipantResource;
    private final CompetitionParticipantResource competitionParticipantResource;

    @Autowired
    public AttendeeHandler(DagensParticipantResource dagensParticipantResource,
                           FitnessParticipantResource fitnessParticipantResource,
                           CompetitionParticipantResource competitionParticipantResource){
        this.dagensParticipantResource = dagensParticipantResource;
        this.fitnessParticipantResource = fitnessParticipantResource;
        this.competitionParticipantResource = competitionParticipantResource;
    }

    @Scheduled(fixedDelay = 60000)
    private void pushDagensParticipants() {
        dagensParticipantResource.get()
                .doOnNext(dagensParticipantResource::push)
                .subscribe();
    }

    @Scheduled(fixedDelay = 60000)
    private void pushFitnessParticipants() {
        fitnessParticipantResource.get()
                .doOnNext(fitnessParticipantResource::push)
                .subscribe();
    }

    @Scheduled(fixedDelay = 60000)
    private void pushPerformanceParticipants() {
        competitionParticipantResource.get()
                .doOnNext(competitionParticipantResource::push)
                .subscribe();
    }

    public Flux<ServerSentEvent<ListResponse<WorkoutClass>>> stream(String type) {
        switch (type) {
            case "dagens":
                return dagensParticipantResource.stream();
            case "fitness":
                return fitnessParticipantResource.stream();
            case "competition":
                return competitionParticipantResource.stream();
            default:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    public Mono<ListResponse<WorkoutClass>> get(String type) {
        switch (type) {
            case "dagens":
                return dagensParticipantResource.get();
            case "fitness":
                return fitnessParticipantResource.get();
            case "performance":
                return competitionParticipantResource.get();
            default:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
