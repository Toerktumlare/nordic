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
import se.andolf.nordic.resources.AttendeeResource;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class AttendeeHandler {

    private final ReplayProcessor<ListResponse<WorkoutClass>> replayProcessor;
    private final FluxSink<ListResponse<WorkoutClass>> sink;
    private final AttendeeResource attendeeResource;
    private final Random random;
    private final List<Long> timestamps;

    @Autowired
    public AttendeeHandler(AttendeeResource attendeeResource, @Qualifier("attendeesReplayProcessor") ReplayProcessor<ListResponse<WorkoutClass>> replayProcessor){
        this.attendeeResource = attendeeResource;
        this.replayProcessor = replayProcessor;
        sink = replayProcessor.sink();
        this.random = new Random();
        timestamps = new ArrayList<>();
        timestamps.add(1570341600L);
        timestamps.add(1570345200L);
        timestamps.add(1570361400L);
        timestamps.add(1570379400L);
        timestamps.add(1570383000L);
        timestamps.add(1570386600L);
        timestamps.add(1570390200L);

    }

    public Mono<ListResponse<WorkoutClass>> get() {
        return Mono.just(ListResponse.<WorkoutClass>builder()
                .data(IntStream.range(0, 7)
                        .mapToObj((i) -> WorkoutClass.builder()
                                .name(WorkoutType.DAGENS_PASS)
                                .attendees(attendeeResource.getNames(random.nextInt(56)))
                                .timestamp(timestamps.get(i))
                                .build())
                        .collect(Collectors.toList()))
                .build());
    }

    public ReplayProcessor<ListResponse<WorkoutClass>> getMany() {
        return replayProcessor;
    }

    @Scheduled(fixedDelay = 10000)
    private void fetchAttendees() {
        get().doOnNext(sink::next).subscribe();
    }
}
