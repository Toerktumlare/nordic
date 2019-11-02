package se.andolf.nordic.models;

public enum WorkoutType {

    DAGENS_PASS,
    DAGENS_PASS_HELG,
    FITNESS,
    PERFORMANCE,
    UNKNOWN;

    public static WorkoutType from(String value) {
        if("322".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("326".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("4".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("321".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("231".equals(value))
            return WorkoutType.DAGENS_PASS_HELG;
        else if("312".equals(value))
            return WorkoutType.FITNESS;
        return WorkoutType.UNKNOWN;
    }
}
