package com.example.Restaurant_API_Kafka.repository;

import com.example.Restaurant_API_Kafka.model.Resturant;

import java.util.List;

public interface SearchRepo {
    List<Resturant> findByText(String text);

    Long getall();

}
