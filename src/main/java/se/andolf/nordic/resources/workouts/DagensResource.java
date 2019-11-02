package se.andolf.nordic.resources.workouts;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import se.andolf.nordic.config.properties.WorkoutConfiguration;
import se.andolf.nordic.resources.SheetResource;


@Slf4j
public class DagensResource extends AbstractWorkoutResource {

    public DagensResource(WorkoutConfiguration config, SheetResource sheetResource){
        super(config, sheetResource);
    }

    @Scheduled(cron = "0 0 * * * *")
    private void fetchSheet() {
        get().doOnNext(sink::next).subscribe();
    }
}
