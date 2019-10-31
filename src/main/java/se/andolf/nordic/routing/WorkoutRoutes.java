package se.andolf.nordic.routing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import se.andolf.nordic.handlers.WorkoutHandler;
import se.andolf.nordic.models.response.WorkoutResponse;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM;
import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Configuration
public class WorkoutRoutes {

    private WorkoutHandler workoutHandler;

    @Autowired
    public WorkoutRoutes(WorkoutHandler workoutHandler) {
        this.workoutHandler = workoutHandler;
    }

    @Bean
    public RouterFunction<ServerResponse> workouts() {
        return route()
                .path("/api", builder -> builder
                    .GET("/workouts/{id}", accept(TEXT_EVENT_STREAM), request -> ok()
                            .contentType(MediaType.TEXT_EVENT_STREAM)
                            .header("Cache-Control", "no-transform")
                            .body(workoutHandler.stream(request.pathVariable("id")), new ParameterizedTypeReference<List<WorkoutResponse>>(){}))
                    .GET("/workouts", accept(APPLICATION_JSON), request -> ok()
                            .body(workoutHandler.get(), new ParameterizedTypeReference<List<WorkoutResponse>>(){}))
                    .build())
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> htmlRouter(@Value("classpath:/public/index.html") Resource html) {
            return route(GET("/*"), request -> ok()
                    .contentType(MediaType.TEXT_HTML)
                    .syncBody(html)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> imgRouter() {
        return RouterFunctions
                .resources("/**", new ClassPathResource("public/"));
    }
}
