package se.andolf.nordic.models;

public enum WorkoutType {

    DAGENS_PASS,
    DAGENS_PASS_HELG,
    DAGENS_PASS_LUNCH,
    FITNESS,
    FITNESS_LUNCH,
    COMPETITION,
    MASTODONT_WORKOUT,
    GRATIS_PROVA_CROSSFIT,
    FITNESS_COMPETITION_JOINED,
    TEMAPASS_JULAFTON,
    UNKNOWN;

    // number parameter
    
    // Dagens pass morgon, 496
    // Dagens pass morgon, 42
    // Dagens pass lunch, 326
    // Dagens pass lunch 554
    // Dagens pass kvall, 14
    // Dagens pass kvall stort, 321
    // Dagens pass helg, 231
    // Fitness-pass, 312
    // Fitness-pass, 376
    // Fitness-pass lunch, 563
    // Fitness-pass Stort, 428
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
            return WorkoutType.DAGENS_PASS_LUNCH;
        else if("554".equals(value))
            return WorkoutType.DAGENS_PASS_LUNCH;
        else if("14".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("321".equals(value))
            return WorkoutType.DAGENS_PASS;
        else if("231".equals(value))
            return WorkoutType.DAGENS_PASS_HELG;
        else if("312".equals(value))
            return WorkoutType.FITNESS;
        else if("376".equals(value))
            return WorkoutType.FITNESS;
        else if("428".equals(value))
            return WorkoutType.FITNESS;
        else if("563".equals(value))
            return WorkoutType.FITNESS_LUNCH;
        else if("235".equals(value))
            return WorkoutType.COMPETITION;
        else if("178".equals(value))
            return WorkoutType.COMPETITION;
        else if("381".equals(value))
            return WorkoutType.MASTODONT_WORKOUT;
        else if("27".equals(value))
            return WorkoutType.GRATIS_PROVA_CROSSFIT;
        else if("498".equals(value))
            return WorkoutType.FITNESS_COMPETITION_JOINED;
        else if("63".equals(value))
            return WorkoutType.TEMAPASS_JULAFTON;
        return WorkoutType.UNKNOWN;
    }
}
