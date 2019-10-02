package se.andolf.nordic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class CorsConfig {

    @Bean
    public CorsWebFilter corsWebFilter() {
        // TODO: externalize cors allowed origins config
        final CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:8080"));
        corsConfig.setMaxAge(8000L);
        corsConfig.addAllowedMethod("GET");

        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsWebFilter(source);
    }
}
