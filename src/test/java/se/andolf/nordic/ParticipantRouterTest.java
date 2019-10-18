package se.andolf.nordic;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Ignore;
import org.junit.Test;
import reactor.core.publisher.ReplayProcessor;
import se.andolf.nordic.handlers.AttendeeHandler;
import se.andolf.nordic.resources.ActivityResource;
import se.andolf.nordic.resources.DummyActivityResource;

public class ParticipantRouterTest {


    @Test @Ignore
    public void exampleTest() {

        final ActivityResource activityResource = new DummyActivityResource();
        final AttendeeHandler attendeeHandler = new AttendeeHandler(activityResource, ReplayProcessor.cacheLast());

        attendeeHandler.get().subscribe(value -> {
            try {
                System.out.println(new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(value));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        });
    }

}
