package se.andolf.nordic.utils;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.IsoFields;
import java.time.temporal.TemporalAdjusters;
import java.time.temporal.WeekFields;
import java.util.List;
import java.util.Locale;
import java.util.stream.IntStream;

import static java.util.stream.Collectors.toList;

public class DateUtils {

    public static int getCurrentWeek() {
        final WeekFields weekFields = WeekFields.of(Locale.getDefault());
        return LocalDate.now().get(weekFields.weekOfWeekBasedYear());
    }

    public static List<LocalDate> getDatesForWeek(long calendarWeek) {
        LocalDate start = LocalDate.ofYearDay(LocalDate.now().getYear(),1)
                .with(IsoFields.WEEK_OF_WEEK_BASED_YEAR, calendarWeek)
                .with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));

        return IntStream.range(0, 7).mapToObj(start::plusDays).collect(toList());
    }
}
