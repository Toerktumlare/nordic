package se.andolf.nordic.config;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsRequestInitializer;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.http.HttpTransportFactory;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.auth.oauth2.ServiceAccountCredentials;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import se.andolf.nordic.config.properties.SheetConnectionProperties;
import se.andolf.nordic.utils.FileUtils;

import java.io.IOException;
import java.io.InputStream;
import java.security.GeneralSecurityException;
import java.util.Collections;

@Configuration
public class SheetConfig {

    private SheetConnectionProperties sheetConnectionProperties;

    @Autowired
    public SheetConfig(SheetConnectionProperties sheetConnectionProperties) {
        this.sheetConnectionProperties = sheetConnectionProperties;
    }

    @Bean
    @Profile("prod")
    public Sheets prodSheets() {
        final InputStream credentialStream = FileUtils.readAsString(sheetConnectionProperties.getValue());
        return createSheets(credentialStream);
    }

    @Bean
    @Profile("!prod")
    public Sheets devSheets() {
        final InputStream credentialStream = FileUtils.read(sheetConnectionProperties.getFilename());
        return createSheets(credentialStream);
    }

    private Sheets createSheets(InputStream credentialStream) {
        try {
            final GoogleCredentials credentials = ServiceAccountCredentials.fromStream(credentialStream).createScoped(Collections.singleton(SheetsScopes.SPREADSHEETS_READONLY));

            final HttpRequestInitializer httpRequestInitializer = new HttpCredentialsAdapter(credentials);
            return new Sheets.Builder(GoogleNetHttpTransport.newTrustedTransport(),
                    JacksonFactory.getDefaultInstance(), httpRequestInitializer)
                    .setApplicationName("nordic-montoring")
                    .setSheetsRequestInitializer(new SheetsRequestInitializer("AIzaSyDeNtz65wuxX6WT-vFxQrI2DscSv6ElacQ"))
                    .build();
        } catch (GeneralSecurityException | IOException e) {
            throw new BeanCreationException("Could not create Sheets bean", e);
        }
    }

    private class DefaultHttpTransportFactory implements HttpTransportFactory {

        public HttpTransport create() {
            return new NetHttpTransport();
        }
    }
}
