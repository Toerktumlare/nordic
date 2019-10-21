package se.andolf.nordic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class ClientConfig {

    @Bean
    public WebClient webclient(WebClient.Builder webClient) {
        return webClient.baseUrl("https://crossfitnordic.brpsystems.com")
                .build();
    }
}
