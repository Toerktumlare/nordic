package se.andolf.nordic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.reactive.config.EnableWebFlux;

import java.util.Locale;

@SpringBootApplication
@EnableScheduling
@EnableWebFlux
public class NordicApplication {

	public static void main(String[] args) {
        Locale.setDefault(new Locale("en", "GB"));
		SpringApplication.run(NordicApplication.class, args);
	}

}
