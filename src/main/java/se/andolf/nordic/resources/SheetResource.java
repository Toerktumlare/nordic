package se.andolf.nordic.resources;

import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.util.List;

@Controller
public class SheetResource {

    private final Sheets sheets;

    @Autowired
    public SheetResource(Sheets sheets) {
        this.sheets = sheets;
    }

    public Mono<List<ValueRange>> getById(String id, List<String> ranges) {
        return Mono.fromCallable(() -> sheets.spreadsheets()
                .values()
                .batchGet(id)
                .setRanges(ranges)
                .setKey("AIzaSyDeNtz65wuxX6WT-vFxQrI2DscSv6ElacQ")
                .execute()
                .getValueRanges())
                .subscribeOn(Schedulers.elastic())
                .doOnError(Mono::error);
        // TODO: fix correct exception
    }
}
