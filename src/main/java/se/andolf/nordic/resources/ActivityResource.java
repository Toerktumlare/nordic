package se.andolf.nordic.resources;

import reactor.core.publisher.Mono;
import se.andolf.nordic.models.activities.ActivityResponse;

public interface ActivityResource {

    Mono<ActivityResponse> getActivities();
}
