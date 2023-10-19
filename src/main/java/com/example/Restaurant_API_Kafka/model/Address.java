package com.example.Restaurant_API_Kafka.model;

public class Address {

    private  String building;
    private Float coord[];

    private Long zipcode;

    private String street;

    public Address(String building, Float[] coord, Long zipcode, String street) {
        this.building = building;
        this.coord = coord;
        this.zipcode = zipcode;
        this.street = street;
    }

    public Address() {
        //empty constructor
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public Float[] getCoord() {
        return coord;
    }

    public void setCoord(Float[] coord) {
        this.coord = coord;
    }

    public Long getZipcode() {
        return zipcode;
    }

    public void setZipcode(Long zipcode) {
        this.zipcode = zipcode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }
}
