package com.Proyecto2.Lenguajes.models;


import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Product {
    @Id
    private String id;
    private String description;
    private String url;
    private String name;
    private String price;


    public Product() {
    }

    public Product(String id, String description, String url, String name, String price) {
        this.id = id;
        this.description = description;
        this.url = url;
        this.name = name;
        this.price = price;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
