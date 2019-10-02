package se.andolf.nordic.config;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsRequestInitializer;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.auth.oauth2.ServiceAccountCredentials;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import se.andolf.nordic.utils.FileUtils;

import java.io.IOException;
import java.io.InputStream;
import java.security.GeneralSecurityException;
import java.util.Collections;

@Configuration
public class SheetConfig {

    @Bean
    public Sheets sheets() {
        try {
            final InputStream credentialStream = FileUtils.read("nordic-458436009a51.json");
            final GoogleCredentials credentials = ServiceAccountCredentials.fromStream(credentialStream).createScoped(Collections.singleton(SheetsScopes.SPREADSHEETS_READONLY));
            final HttpRequestInitializer httpRequestInitializer = new HttpCredentialsAdapter(credentials);
            return new Sheets.Builder(GoogleNetHttpTransport.newTrustedTransport(),
                        JacksonFactory.getDefaultInstance(), httpRequestInitializer)
                        .setSheetsRequestInitializer(new SheetsRequestInitializer("AIzaSyDeNtz65wuxX6WT-vFxQrI2DscSv6ElacQ"))
                        .build();
        } catch (GeneralSecurityException | IOException e) {
            throw new BeanCreationException("Could not create Sheets bean", e);
        }
    }
}
