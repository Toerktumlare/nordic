package se.andolf.nordic.models.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ListResponse<T> {

    private List<T> data;
}
