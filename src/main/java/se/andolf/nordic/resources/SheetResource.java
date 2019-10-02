package se.andolf.nordic.resources;

import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.List;

@Controller
public class SheetResource {

    private final Sheets sheets;

    @Autowired
    public SheetResource(Sheets sheets) {
        this.sheets = sheets;
    }

    public Mono<List<ValueRange>> getById(String id, List<String> ranges) {

        try {
            return Mono.just(sheets.spreadsheets()
                    .values()
                    .batchGet(id)
                    .setRanges(ranges)
                    .setKey("AIzaSyDeNtz65wuxX6WT-vFxQrI2DscSv6ElacQ")
                    .execute().getValueRanges()).doOnSuccess(System.out::println);
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.I_AM_A_TEAPOT);
        }
    }
}
