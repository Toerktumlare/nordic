package se.andolf.nordic.utils;

import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.List;

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

    public static List<String> readAsList(String filename) {
        try {
            return IOUtils.readLines(new ClassPathResource(filename).getInputStream(), Charset.forName("UTF-8"));
        } catch (IOException e) {
            throw new IllegalArgumentException(e);
        }
    }
}