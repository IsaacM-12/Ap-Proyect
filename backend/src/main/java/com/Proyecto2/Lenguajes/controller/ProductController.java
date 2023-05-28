package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.models.Product;
import com.Proyecto2.Lenguajes.repository.ProductRepository;
import com.Proyecto2.Lenguajes.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
    public void createProduct(@RequestBody Product req) {
        String id = req.getId();
        Optional<Product> product = productRepository.findById(id);

        if(product.isEmpty()){
            productRepository.save(req);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/product/{id}")
    public void deleteProduct(@PathVariable String id){
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        productRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path = "/product/{id}/description")
    public Product updateDescription(@PathVariable String id, @RequestBody Map<String, String> request) {
        String description = request.get("description");
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("not found: " + id);
        }
        Product product = optionalProduct.get();
        product.setDescription(description);
        return productRepository.save(product);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path = "/product/{id}/name")
    public Product updateName(@PathVariable String id, @RequestBody Map<String, String> request) {
        String name = request.get("name");
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("not found: " + id);
        }
        Product product = optionalProduct.get();
        product.setName(name);
        return productRepository.save(product);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path = "/product/{id}/price")
    public Product updatePrice(@PathVariable String id, @RequestBody Map<String, Object> request) {
        Double price = Double.valueOf(request.get("price").toString());
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("not found: " + id);
        }
        Product product = optionalProduct.get();
        product.setPrice(price);
        return productRepository.save(product);
    }



    // seleccionar todas las imagenes por key
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/product/find/{key}")
    public List<Product> getImagesByKeys(@PathVariable String key) {
        return productService.searchProductByKey(key);
    }

}
