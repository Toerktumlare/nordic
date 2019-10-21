package se.andolf.nordic.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;
import se.andolf.nordic.resources.ActivityResource;
import se.andolf.nordic.resources.BrpActivityResource;

@Configuration
public class ActivityConfig {

    @Bean
    @Qualifier("BrpActivityResource")
    public ActivityResource activityResource(WebClient webClient) {
        return new BrpActivityResource(webClient);
    }
}
