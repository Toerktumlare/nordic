package se.andolf.nordic.config.properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.ReplayProcessor;

@Configuration
public class ReplayProcessorConfig {

    @Bean("workoutsReplayProcessor")
    public ReplayProcessor workoutsReplayProcessor() {
        return ReplayProcessor.cacheLast();
    }

    @Bean("attendeesReplayProcessor")
    public ReplayProcessor attendeeReplayProcessor() {
        return ReplayProcessor.cacheLast();
    }
}
