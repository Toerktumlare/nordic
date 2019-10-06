package se.andolf.nordic.config.properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.ReplayProcessor;

@Configuration
public class ReplayProcessorConfig {

    @Bean
    public ReplayProcessor replayProcessor() {
        return ReplayProcessor.cacheLast();
    }
}
