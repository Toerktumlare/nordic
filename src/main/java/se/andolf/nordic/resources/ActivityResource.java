package se.andolf.nordic.resources;

import reactor.core.publisher.Mono;
import se.andolf.nordic.models.activities.Activity;

import java.util.List;

public interface ActivityResource {

    Mono<List<Activity>> getActivities();
}
