package se.andolf.nordic.models.activities;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Product {

    private String name;
    private String number;
}
