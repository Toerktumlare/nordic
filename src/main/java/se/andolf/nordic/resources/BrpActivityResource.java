package se.andolf.nordic.resources;

import reactor.core.publisher.Mono;
import se.andolf.nordic.models.activities.Activity;
import se.andolf.nordic.models.activities.Start;
import se.andolf.nordic.models.activities.TimePoint;
import se.andolf.nordic.models.response.Participant;

import java.util.Collections;
import java.util.List;

public class BrpActivityResource implements ActivityResource {


    @Override
    public Mono<List<Activity>> getActivities() {

        final Start start = Start.builder()
                .timePoint(TimePoint.builder()
                        .timestamp(1571420500L)
                        .build())
                .build();

        final Participant participant = Participant.builder()
                .firstname("John")
                .lastname("Doe")
                .build();

        final Activity activity = Activity.builder()
                .product("Dagens Pass")
                .start(start)
                .participants(Collections.singletonList(participant))
                .build();

        return Mono.just(Collections.singletonList(activity));
    }
}
