package se.andolf.nordic.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import se.andolf.nordic.resources.ActivityResource;
import se.andolf.nordic.resources.DummyActivityResource;

@Configuration
public class ActivityConfig {

    @Bean
    @Qualifier("DummyActivityResource")
    public ActivityResource activityResource() {
        return new DummyActivityResource();
    }
}
