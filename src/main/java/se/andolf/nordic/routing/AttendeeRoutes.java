package se.andolf.nordic.routing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import se.andolf.nordic.handlers.AttendeeHandler;
import se.andolf.nordic.models.response.ListResponse;
import se.andolf.nordic.models.response.WorkoutClass;

import java.time.Duration;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Configuration
public class AttendeeRoutes {

    private AttendeeHandler attendeeHandler;

    @Autowired
    public AttendeeRoutes(AttendeeHandler attendeeHandler) {
        this.attendeeHandler = attendeeHandler;
    }

    @Bean
    public RouterFunction<ServerResponse> attendees() {
        return route()
                .path("/api/participants/{type}", builder -> builder
                    .GET("", accept(TEXT_EVENT_STREAM), request -> ok()
                            .contentType(TEXT_EVENT_STREAM)
                            .header("Cache-Control", "no-transform")
                            .body(Flux.merge(attendeeHandler.stream(request.pathVariable("type")), Flux.interval(Duration.ofSeconds(15))
                                    .map(aLong -> ServerSentEvent.builder().comment("keep alive").build())),
                                    new ParameterizedTypeReference<ListResponse<WorkoutClass>>() {}))
                    .GET("", accept(APPLICATION_JSON), request -> ok()
                            .contentType(APPLICATION_JSON)
                            .body(attendeeHandler.get(request.pathVariable("type")), new ParameterizedTypeReference<ListResponse<WorkoutClass>>() {}))
                    .build())
                .build();
    }
}
