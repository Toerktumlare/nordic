package se.andolf.nordic.models.activities;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class End {

    private TimePoint timepoint;
}
