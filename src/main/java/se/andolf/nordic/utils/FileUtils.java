package se.andolf.nordic.utils;

import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;

public class FileUtils {

    // TODO: fix error handling
    public static InputStream read(String fileName) {

        try {
            return new ClassPathResource(fileName).getInputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}