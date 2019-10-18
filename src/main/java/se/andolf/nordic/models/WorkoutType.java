package se.andolf.nordic.models;

public enum WorkoutType {

    DAGENS_PASS,
    FITNESS,
    PERFORMANCE,
    UNKNOWN;

    public static WorkoutType from(String value) {
        if("Dagens Pass".equals(value))
            return WorkoutType.DAGENS_PASS;
        return WorkoutType.UNKNOWN;
    }
}
