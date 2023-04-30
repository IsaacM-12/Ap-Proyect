package com.Proyecto2.Lenguajes.repository;

import com.Proyecto2.Lenguajes.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String> {
}
