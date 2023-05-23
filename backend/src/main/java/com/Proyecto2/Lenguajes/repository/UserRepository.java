package com.Proyecto2.Lenguajes.repository;

import com.Proyecto2.Lenguajes.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
