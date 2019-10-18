package se.andolf.nordic.models.activities;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class TimePoint {

    private long timestamp;
}
