package se.andolf.nordic.config.properties;

import lombok.Builder;
import lombok.Value;
import se.andolf.nordic.models.WorkoutType;

@Value
@Builder
public class WorkoutConfiguration {

    private WorkoutType workoutType;
    private String tabName;
    @Builder.Default
    private int yearStartCell = 3814;
    @Builder.Default
    private int oneWeakCellCount = 16;
    @Builder.Default
    private String startColumn = "A";
    @Builder.Default
    private String endColumn = "J";
    @Builder.Default
    private int weekLength = 7;
    @Builder.Default
    private int weekdayStartOffset = 2;
    @Builder.Default
    private String sheetId = "12lWiSpQypDa2l3QB6hhFcvalH9DmUvTJzWrDBm7N8-c";
}
