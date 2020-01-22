package se.andolf.nordic.models;

public enum WorkoutType {

    DAGENS_PASS,
    DAGENS_PASS_HELG,
    FITNESS,
    PERFORMANCE,
    MASTODONT_WORKOUT,
    GRATIS_PROVA_CROSSFIT,
    FITNESS_PERFORMANCE_JOINED,
    TEMAPASS_JULAFTON,
    UNKNOWN;

    // number parameter
    
    // Dagens pass morgon, 496
    // Dagens pass morgon, 42
    // Dagens pass lunch, 326
    // Dagens pass kvall, 4
    // Dagens pass kvall stort, 321
    // Dagens pass helg, 231
    // Fitness-pass, 312
    // Fitness-pass, 376
    // Performance morgon, 235
    // Performance, 178
    // Mastodont, 381
    // Fitness/Performance joined 498
    // Temapass Julafton 63


    public static WorkoutType from(String value) {
        if("496".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("42".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("322".equals(value))
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
        else if("376".equals(value))
            return WorkoutType.FITNESS;
        else if("381".equals(value))
            return WorkoutType.MASTODONT_WORKOUT;
        else if("27".equals(value))
            return WorkoutType.GRATIS_PROVA_CROSSFIT;
        else if("498".equals(value))
            return WorkoutType.FITNESS_PERFORMANCE_JOINED;
        else if("63".equals(value))
            return WorkoutType.TEMAPASS_JULAFTON;
        return WorkoutType.UNKNOWN;
    }
}
