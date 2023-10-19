package com.example.Restaurant_API_Kafka.repository;

import com.example.Restaurant_API_Kafka.model.Resturant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Restrepo extends MongoRepository<Resturant, String> {

}
