package se.andolf.nordic.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(
        prefix = "google.sheets.credentials",
        ignoreUnknownFields = false
)
@Data
public class SheetConnectionProperties {

    private String filename;
    private String value;
}
