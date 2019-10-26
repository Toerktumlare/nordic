package se.andolf.nordic.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;
import reactor.core.publisher.ReplayProcessor;
import se.andolf.nordic.models.WorkoutType;
import se.andolf.nordic.models.response.ListResponse;
import se.andolf.nordic.models.response.WorkoutClass;
import se.andolf.nordic.resources.ActivityResource;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AttendeeHandler {

    private final ReplayProcessor<ListResponse<WorkoutClass>> replayProcessor;
    private final FluxSink<ListResponse<WorkoutClass>> sink;
    private final ActivityResource activityResource;

    @Autowired
    public AttendeeHandler(@Qualifier("BrpActivityResource") ActivityResource activityResource, @Qualifier("attendeesReplayProcessor") ReplayProcessor<ListResponse<WorkoutClass>> replayProcessor){
        this.activityResource = activityResource;
        this.replayProcessor = replayProcessor;
        sink = replayProcessor.sink();


    }

    public Mono<ListResponse<WorkoutClass>> get() {
        return activityResource.getActivities().flatMap(activities -> {
            final List<WorkoutClass> workoutClasses = activities.getActivities().getActivity().stream()
                    .map(activity -> WorkoutClass.builder()
                            .name(WorkoutType.from(activity.getProduct().getNumber()))
                            .timestamp(activity.getStart().getTimepoint().getTimestamp())
                            .participants(activity.getParticipants())
                            .build())
                    .filter(workoutClass -> !workoutClass.getName().equals(WorkoutType.UNKNOWN))
                    .collect(Collectors.toList());
            return Mono.just(ListResponse.<WorkoutClass>builder().data(workoutClasses).build());
        });
    }

    public ReplayProcessor<ListResponse<WorkoutClass>> getMany() {
        return replayProcessor;
    }

    @Scheduled(fixedDelay = 60000)
    private void fetchParticipants() {
        get().doOnNext(sink::next).subscribe();
    }
}
