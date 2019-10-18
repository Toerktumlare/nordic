package se.andolf.nordic.routing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import se.andolf.nordic.handlers.AttendeeHandler;
import se.andolf.nordic.models.response.ListResponse;
import se.andolf.nordic.models.response.WorkoutClass;

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
        return route().path("/api/participants", builder -> builder
                .GET("", request -> ok().body(attendeeHandler.get(),
                        new ParameterizedTypeReference<ListResponse<WorkoutClass>>() {
                        }))
                .GET("/subscribe", request -> ok()
                        .contentType(MediaType.TEXT_EVENT_STREAM)
                        .body(attendeeHandler.getMany(), new ParameterizedTypeReference<ListResponse<WorkoutClass>>() {}))
                        .build())
                .build();
    }
}
