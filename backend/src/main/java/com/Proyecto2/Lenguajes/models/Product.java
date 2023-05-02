package com.Proyecto2.Lenguajes.models;

import org.hibernate.annotations.GenericGenerator;

import com.Proyecto2.Lenguajes.dto.ProductRequest;

import javax.persistence.*;


@Entity
public class Product {
    
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "ID", length = 36)
    private String id;

    @Column(name = "description")
    private String description;

    @Column(name = "url")
    private String url;

    @Column(name = "name")
    private String name;

    @Column(name = "price", columnDefinition = "DOUBLE")
    private double price;


    public Product() {
    }

    public Product(ProductRequest req) {
        this.description = req.getDescription();
        this.url = req.getUrl();
        this.name = req.getName();
        this.price = req.getPrice();
    }

    public Product(String id, String description, String url, String name, double price) {
        this.id = id;
        this.description = description;
        this.url = url;
        this.name = name;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
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
