package com.example.Restaurant_API_Kafka.repository;

import com.example.Restaurant_API_Kafka.model.Resturant;
import com.mongodb.MongoException;
import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import org.bson.Document;
//import com.mongodb.MongoClient;
//import com.mongodb.MongoClientURI;
import org.bson.conversions.Bson;
import java.util.concurrent.TimeUnit;
import org.bson.Document;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;



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

    public Resturant getResult(String text){
        try{
            MongoDatabase database = mongoClient.getDatabase("sample_restaurants");
            MongoCollection<Document> collection = database.getCollection("restaurants");

            // Construct a comprehensive query with Regex for case-insensitive matching
            Bson query = Filters.regex("$text", Pattern.compile(text, Pattern.CASE_INSENSITIVE));

            // Find the first matching restaurant
            FindIterable<Document> result = collection.find(query).limit(1);
            Document document = result.first();

            if (document != null) {
                // Map the retrieved document to the Restaurant object
                return new Resturant((org.springframework.data.mongodb.core.mapping.Document) document); // Assuming a constructor that maps from Document
            } else {
                return null; // No matching restaurant found
            }

        }    catch (MongoException e) {
            // Handle MongoDB-related exceptions gracefully
            //log.error("Error during restaurant search:", e);
            throw new RuntimeException("Failed to search for restaurants", e);
        }


    }
}
