package se.andolf.nordic.models.activities;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class Activities {

    private List<Activity> activity;
}
