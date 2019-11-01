package se.andolf.nordic.events;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import se.andolf.nordic.resources.workouts.DagensResource;
import se.andolf.nordic.resources.workouts.FitnessResource;

@Component
@Slf4j
public class ApplicationStartupEvent implements ApplicationListener<ApplicationReadyEvent> {

    private final DagensResource dagensResource;
    private final FitnessResource fitnessResource;

    public ApplicationStartupEvent(DagensResource dagensResource, FitnessResource fitnessResource) {
        this.dagensResource = dagensResource;
        this.fitnessResource = fitnessResource;
    }

    @Override
    public void onApplicationEvent(final ApplicationReadyEvent event) {

        log.info("Fetching data from google sheets");
        log.info("filling Dagens ReplayProcessor");
        dagensResource.get().doOnNext(dagensResource::push).subscribe();
        log.info("filling Fitness ReplayProcessor");
        fitnessResource.get().doOnNext(fitnessResource::push).subscribe();
        log.info("All data fetched and ready to go.");

    }
}