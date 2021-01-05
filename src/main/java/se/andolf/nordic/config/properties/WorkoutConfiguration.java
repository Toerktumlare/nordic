package se.andolf.nordic.config.properties;

import lombok.Builder;
import lombok.Value;
import se.andolf.nordic.models.WorkoutType;

@Value
@Builder
public class WorkoutConfiguration {

    WorkoutType workoutType;
    String tabName;
    @Builder.Default
    int yearStartCell = 5;
    @Builder.Default
    int oneWeakCellCount = 16;
    @Builder.Default
    String startColumn = "A";
    @Builder.Default
    String endColumn = "J";
    @Builder.Default
    int weekLength = 7;
    @Builder.Default
    int weekdayStartOffset = 2;
    @Builder.Default
    String sheetId = "12lWiSpQypDa2l3QB6hhFcvalH9DmUvTJzWrDBm7N8-c";
    @Builder.Default
    String referenceDate = "2020-01-01";
}
