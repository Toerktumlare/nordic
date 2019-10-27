package se.andolf.nordic.models;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Command {

    private CommandType command;
}
