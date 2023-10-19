package com.example.Restaurant_API_Kafka.controller;

import com.example.Restaurant_API_Kafka.model.Resturant;
import com.example.Restaurant_API_Kafka.repository.Restrepo;
import com.example.Restaurant_API_Kafka.repository.SearchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@Controller

//@CrossOrigin
public class HomeController {

    @Autowired
    Restrepo restrepo;
    @Autowired
    SearchRepo searchRepo;

    /*@RequestMapping("api/v1/")
    public String home(){ return "index";}*/


    @GetMapping("api/v1/restaurants")
    public List<Resturant> getallposts(){
        return restrepo.findAll();
    }


    @GetMapping("api/v1/restaurants/total")
    public ResponseEntity<Long> getTotalPosts(){
        Long ans = searchRepo.getall();
        return ResponseEntity.ok(ans);

    }

    @GetMapping("api/v1/restaurants/{text}")
    public ResponseEntity<List<Resturant>> searchResults(@PathVariable String text){

        List<Resturant> results = searchRepo.findByText(text);

        return ResponseEntity.ok(results);
    }


    @PostMapping("api/v1/new")
    public Resturant addRest(@RequestBody Resturant resturant){return restrepo.save(resturant);}


}
