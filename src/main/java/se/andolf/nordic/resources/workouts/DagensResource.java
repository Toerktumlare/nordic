package se.andolf.nordic.resources.workouts;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.scheduling.annotation.Scheduled;
import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.models.response.WorkoutResponse;
import se.andolf.nordic.resources.SheetResource;

import java.util.List;


@Slf4j
public class DagensResource extends AbstractWorkoutResource {

    public DagensResource(WorkoutConfiguration config, SheetResource sheetResource){
        super(config, sheetResource);
    }

    @Scheduled(fixedDelay = 300000)
    private void fetchSheet() {
        get().doOnNext(workoutResponses -> sink.next(ServerSentEvent.<List<WorkoutResponse>>builder()
                .data(workoutResponses)
                .build()))
                .subscribe();
    }
}
