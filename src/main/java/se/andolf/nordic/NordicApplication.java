package se.andolf.nordic;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.reactive.config.EnableWebFlux;

import java.util.Locale;

@SpringBootApplication
@EnableScheduling
@EnableWebFlux
@Slf4j
public class NordicApplication {

	public static void main(String[] args) {
        Locale.setDefault(new Locale("en", "GB"));
        log.info("Default Locale: " + Locale.getDefault());
		SpringApplication.run(NordicApplication.class, args);
	}

}
