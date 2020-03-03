package se.andolf.nordic.models.response;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Participant {

    private String firstname;
    private String lastname;
}
