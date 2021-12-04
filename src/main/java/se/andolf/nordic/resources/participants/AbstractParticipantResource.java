package se.andolf.nordic.resources.participants;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.codec.ServerSentEvent;
import reactor.core.publisher.*;
import se.andolf.nordic.models.WorkoutType;
import se.andolf.nordic.models.response.ListResponse;
import se.andolf.nordic.models.response.Participant;
import se.andolf.nordic.models.response.WorkoutClass;
import se.andolf.nordic.resources.ParticipantResource;

import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractParticipantResource {

    private final ParticipantResource participantResource;

    private final Sinks.Many<ServerSentEvent<ListResponse<WorkoutClass>>> replaySink;

    AbstractParticipantResource(@Qualifier("BrpParticipantResource") ParticipantResource participantResource) {
        this.participantResource = participantResource;
        this.replaySink = Sinks.many().replay().latest();
    }

    public Mono<List<WorkoutClass>> getParticipants() {
        return participantResource.getActivities().flatMap(activities -> {
            final List<WorkoutClass> workoutClasses = activities.getActivities().getActivity().stream()
                    .map(activity -> WorkoutClass.builder()
                            .name(WorkoutType.from(activity.getProduct().getNumber()))
                            .startTime(activity.getStart().getTimepoint().getTimestamp())
                            .endTime(activity.getEnd().getTimepoint().getTimestamp())
                            .participants(activity.getParticipants().stream()
                                    .filter(this::filterFaultyParticipants)
                                    .collect(Collectors.toList()))
                            .build())
                    .collect(Collectors.toList());
            return Mono.just(workoutClasses);
        });
    }

    private boolean filterFaultyParticipants(Participant participant) {
        if(participant.getFirstname() == null || participant.getLastname() == null)
            return false;
        return !participant.getFirstname().equals("Anonymous");
    }

    public Flux<ServerSentEvent<ListResponse<WorkoutClass>>> stream() {
        return replaySink.asFlux();
    }

    public Mono<Void> push(ListResponse<WorkoutClass> workoutClassListResponse) {
        replaySink.emitNext(ServerSentEvent.<ListResponse<WorkoutClass>>builder().data(workoutClassListResponse).build(), Sinks.EmitFailureHandler.FAIL_FAST);
        return Mono.empty();
    }
}
