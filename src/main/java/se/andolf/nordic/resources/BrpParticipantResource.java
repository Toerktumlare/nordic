package se.andolf.nordic.resources;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import se.andolf.nordic.models.activities.ActivityResponse;

import java.time.LocalDate;
import java.util.List;

@Service
@Log4j2
public class BrpParticipantResource implements ParticipantResource {

    private final WebClient webClient;

    @Autowired
    public BrpParticipantResource(WebClient webClient) {
        this.webClient = webClient;
    }

    @Override
    public Mono<ActivityResponse> getActivities() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path("/brponline/api/ver2/activities.json")
                        .queryParam("apikey", "d4014f9a17d54896b680ae1341029923")
                        .queryParam("startdate", LocalDate.now().toString())
                        .queryParam("enddate", LocalDate.now().plusDays(1).toString())
                        .queryParam("businessunitids", "1")
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .flatMap(clientResponse -> {
                    final List<String> contentTypes = clientResponse.headers().header(HttpHeaders.CONTENT_TYPE);
                    if(contentTypes.size() != 0) {
                        if (contentTypes.get(0).contains(MediaType.APPLICATION_JSON_VALUE)) {
                            return clientResponse.bodyToMono(ActivityResponse.class);
                        }
                    }x
                    return clientResponse.bodyToMono(String.class)
                            .doOnSuccess(responseBody -> log.error("Returned body: " + responseBody))
                            .then(Mono.empty());
                });
    }
}
