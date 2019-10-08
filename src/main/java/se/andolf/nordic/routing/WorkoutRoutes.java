package se.andolf.nordic.routing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import se.andolf.nordic.handlers.WorkoutHandler;
import se.andolf.nordic.models.response.WorkoutResponse;

import java.util.List;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Configuration
@EnableWebFlux
public class WorkoutRoutes {

    private WorkoutHandler workoutHandler;

    @Autowired
    public WorkoutRoutes(WorkoutHandler workoutHandler) {
        this.workoutHandler = workoutHandler;
    }

    @Bean
    public RouterFunction<ServerResponse> workouts() {
        return route().path("/api/workouts", builder -> builder
                .GET("", request -> ok()
                        .contentType(MediaType.TEXT_EVENT_STREAM)
                        .body(workoutHandler.getMany(), new ParameterizedTypeReference<List<WorkoutResponse>>(){})))
                .GET("", request -> ok().body(workoutHandler.get(),
                        new ParameterizedTypeReference<List<WorkoutResponse>>(){}))
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
