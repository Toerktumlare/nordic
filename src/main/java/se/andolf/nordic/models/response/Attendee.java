package se.andolf.nordic.models.response;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Attendee {

    public String firstname;
    public String lastname;
}
