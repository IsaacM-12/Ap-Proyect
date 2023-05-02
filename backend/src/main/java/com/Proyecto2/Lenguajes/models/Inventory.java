package com.Proyecto2.Lenguajes.models;

import javax.persistence.*;

@Entity
@Table(name = "inventory")
public class Inventory {
 
    @Id
    @Column(name = "ProductID", length = 36)
    private String id;
 
    @Column(name = "quantity")
    private Integer quantity;
 
 
    public Inventory() {
    }

    public Inventory(String id, Integer quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public Integer getQuantity() {
        return quantity;
    }


    public void setId(String id) {
        this.id = id;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}