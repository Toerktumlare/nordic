package se.andolf.nordic;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class ParticipantRouterTest {


    @Test
    @Disabled
    public void exampleTest() {

        final LocalDate firstDay = LocalDate.of(2020, 1, 1);
        long between = ChronoUnit.WEEKS.between(firstDay, LocalDate.now());

        System.out.println(between);
    }
}
