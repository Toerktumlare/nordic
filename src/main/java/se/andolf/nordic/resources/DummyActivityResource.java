package se.andolf.nordic.resources;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.activities.Activity;
import se.andolf.nordic.models.activities.Start;
import se.andolf.nordic.models.activities.TimePoint;
import se.andolf.nordic.models.response.Participant;
import se.andolf.nordic.utils.FileUtils;

import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class DummyActivityResource implements ActivityResource {

    private final static String FIRST_NAMES_FILENAME = "firstnames.txt";
    private final static String LAST_NAMES_FILENAME = "lastnames.txt";

    private List<String> firstNames;
    private List<String> lastNames;
    final Random random;

    public DummyActivityResource() {
        this.firstNames = FileUtils.readAsList(FIRST_NAMES_FILENAME);
        this.lastNames = FileUtils.readAsList(LAST_NAMES_FILENAME);
        random = new Random();
    }

    @Override
    public Mono<List<Activity>> getActivities() {
        return Mono.just(Collections.singletonList(Activity.builder()
                .product("Dagens Pass")
                .start(Start.builder()
                        .timePoint(TimePoint.builder()
                                .timestamp(1571420500L)
                                .build())
                        .build())
                .participants(getParticipants())
                .build()));
    }

    private List<Participant> getParticipants() {
        return Stream.generate(() -> Participant.builder()
                .firstname(firstNames.get(random.nextInt(firstNames.size())))
                .lastname(lastNames.get(random.nextInt(lastNames.size())))
                .build())
                .limit(random.nextInt(56))
                .collect(Collectors.toList());
    }
}
