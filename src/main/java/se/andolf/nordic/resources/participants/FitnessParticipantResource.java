package se.andolf.nordic.resources.participants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.WorkoutType;
import se.andolf.nordic.models.response.ListResponse;
import se.andolf.nordic.models.response.WorkoutClass;
import se.andolf.nordic.resources.ParticipantResource;

import java.util.stream.Collectors;

@Component
public class FitnessParticipantResource extends AbstractParticipantResource {

    @Autowired
    public FitnessParticipantResource(ParticipantResource participantResource) {
        super(participantResource);
    }

    public Mono<ListResponse<WorkoutClass>> get() {
        return getParticipants().flatMap(workoutClasses -> Mono.just(ListResponse.<WorkoutClass>builder()
                .data(workoutClasses.stream()
                        .filter(workoutClass -> workoutClass.getName().equals(WorkoutType.FITNESS)||
                                workoutClass.getName().equals(WorkoutType.FITNESS_LUNCH) ||
                                workoutClass.getName().equals(WorkoutType.DAGENS_PASS_HELG) ||
                                workoutClass.getName().equals(WorkoutType.MASTODONT_WORKOUT) ||
                                workoutClass.getName().equals(WorkoutType.FITNESS_COMPETITION_JOINED) ||
                                workoutClass.getName().equals(WorkoutType.GRATIS_PROVA_CROSSFIT) ||
                                workoutClass.getName().equals(WorkoutType.TEMAPASS_JULAFTON))
                        .collect(Collectors.toList())).build()));
    }
}
