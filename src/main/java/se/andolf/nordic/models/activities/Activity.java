package se.andolf.nordic.models.activities;

import lombok.Builder;
import lombok.Value;
import se.andolf.nordic.models.response.Participant;

import java.util.List;

@Value
@Builder
public class Activity {

    private Product product;
    private List<Participant> participants;
    private Start start;
    private End end;
}
