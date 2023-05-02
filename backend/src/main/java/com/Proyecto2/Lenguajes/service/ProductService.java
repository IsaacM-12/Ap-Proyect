package com.Proyecto2.Lenguajes.service;

import com.Proyecto2.Lenguajes.models.Product;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.ArrayList;
import java.util.List;

import com.Proyecto2.Lenguajes.models.Inventory;

@Service
public class ProductService {

    @PersistenceContext
    EntityManager entityManager;

    //"{ call searchByKeyWords(String keyWords) }";
    // Busaca por KeyWords las imagenes y las devuelve usando un procedure
    public List<Product> searchProductByKey(String keyWords) {
        List<Product> productList = new ArrayList<>();

        StoredProcedureQuery query = entityManager
                .createStoredProcedureQuery("searchProductByKey")
                .registerStoredProcedureParameter("keyWords",String.class, ParameterMode.IN)
                .setParameter("keyWords", keyWords);

        query.execute();

        List<Object[]> respuesta = query.getResultList();

        // En la respuesta de el proedimiento mapea y mete la respuesta en un List<Image>
        for (Object[] registro : respuesta) {
            String id = registro[0].toString();
            String name = registro[1].toString();
            String description = registro[2].toString();
            String url = registro[3].toString();
            double price = Double.parseDouble(registro[4].toString());
            int quantity = Integer.parseInt(registro[5].toString());

            Inventory inventory = new Inventory(id, quantity);
            Product product = new Product(id, description, url, name, price);
            productList.add(product);
        }

        return productList;

    }
}
