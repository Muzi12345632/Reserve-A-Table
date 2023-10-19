package com.example.Restaurant_API_Kafka.repository;

import com.example.Restaurant_API_Kafka.model.Resturant;
import com.mongodb.client.MongoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import org.bson.Document;
//import com.mongodb.MongoClient;
//import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.conversions.Bson;
import java.util.concurrent.TimeUnit;
import org.bson.Document;
import com.mongodb.client.AggregateIterable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
//@Component
public class SearchRepoImpl implements SearchRepo{
    @Autowired
    MongoClient mongoClient;
    @Autowired
    MongoConverter converter;
    @Override
    @Cacheable("addresses")
    public List<Resturant> findByText(String text) {

        final List<Resturant> restaurants = new ArrayList<>();

        MongoDatabase database = mongoClient.getDatabase("sample_restaurants");
        MongoCollection<Document> collection = database.getCollection("restaurants");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                        new Document("index", "default")
                                .append("text",
                                        new Document("query", text)
                                                .append("path", Arrays.asList("name", "borough", "cuisine")))),
                new Document("$sort",
                        new Document("grade", -1L)),
                new Document("$limit", 12L)));

        result.forEach(doc -> restaurants.add(converter.read(Resturant.class,doc)));

        return restaurants;
    }

    public Long getall(){
        MongoDatabase database1 = mongoClient.getDatabase("sample_restaurants");
        return  database1.getCollection("restaurants").countDocuments();
    }
}
