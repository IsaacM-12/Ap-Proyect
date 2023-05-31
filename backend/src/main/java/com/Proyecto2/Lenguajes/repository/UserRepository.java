package com.Proyecto2.Lenguajes.repository;

import com.Proyecto2.Lenguajes.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findOneByEmailAndPassword(String email, String password);
 
    User findByEmail(String email);
}
