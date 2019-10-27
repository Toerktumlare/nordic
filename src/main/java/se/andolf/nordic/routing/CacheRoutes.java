package se.andolf.nordic.routing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import se.andolf.nordic.handlers.WorkoutHandler;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Configuration
public class CacheRoutes {

    private WorkoutHandler workoutHandler;

    @Autowired
    public CacheRoutes(WorkoutHandler workoutHandler) {
        this.workoutHandler = workoutHandler;
    }

    @Bean
    public RouterFunction<ServerResponse> caches() {
        return route()
                .path("/admin/cache", builder -> builder
                    .POST("", accept(APPLICATION_JSON), request -> ok()
                            .contentType(APPLICATION_JSON)
                            .body(workoutHandler.run(request), Void.class))
                    .build())
                .build();
    }
}
