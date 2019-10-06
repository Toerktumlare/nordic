package se.andolf.nordic.resources;

import org.springframework.stereotype.Service;
import se.andolf.nordic.models.response.Attendee;
import se.andolf.nordic.utils.FileUtils;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class AttendeeResource {

    private final static String FIRST_NAMES_FILENAME = "firstnames.txt";
    private final static String LAST_NAMES_FILENAME = "lastnames.txt";

    private List<String> firstNames;
    private List<String> lastnames;
    final Random random;

    public AttendeeResource() {
        this.firstNames = FileUtils.readAsList(FIRST_NAMES_FILENAME);
        this.lastnames = FileUtils.readAsList(LAST_NAMES_FILENAME);
        random = new Random();
    }

    public List<Attendee> getNames(int size) {
        return Stream.generate(() -> Attendee.builder()
                .firstname(firstNames.get(random.nextInt(firstNames.size())))
                .lastname(lastnames.get(random.nextInt(lastnames.size())))
                .build())
                .limit(size)
                .collect(Collectors.toList());
    }


}
