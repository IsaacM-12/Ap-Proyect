package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.models.Product;
import com.Proyecto2.Lenguajes.repository.ProductRepository;
import com.Proyecto2.Lenguajes.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/product")
    public List<Product> getPrduct() {
        return productRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/product/{id}")
    public Product getById(@PathVariable String id) {
        Optional<Product> product = productRepository.findById(id);

        if(product.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return product.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/product")
    public void createProduct(@RequestBody Product newProduct) {
        newProduct.setId(null); // Esto asegura que Hibernate generará un nuevo ID único para el producto
        productRepository.save(newProduct);
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/product/{id}")
    public void deletePrduct(@PathVariable String id){
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        productRepository.deleteById(id);
    }

    // seleccionar todas las imagenes por key
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/product/find/{key}")
    public List<Product> getImagesByKeys(@PathVariable String key) {
        return productService.searchProductByKey(key);
    }

}
