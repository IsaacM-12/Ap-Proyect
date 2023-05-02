package com.Proyecto2.Lenguajes.repository;

import com.Proyecto2.Lenguajes.models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, String> {
}
