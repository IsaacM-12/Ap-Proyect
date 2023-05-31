package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.dto.LoginDTO;
import com.Proyecto2.Lenguajes.models.User;
import com.Proyecto2.Lenguajes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController

public class UserController {

    @Autowired
    private UserRepository userRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/user")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // Login
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/user/login")
    public User login(@RequestBody LoginDTO request) {
        String email = request.getEmail();
        String password = request.getPassword();
 
        Optional<User> user = userRepository.findOneByEmailAndPassword(email, password);
 
        if (user.isEmpty()) {
            throw new RuntimeException("Credenciales inválidas");
        }
 
        return user.get();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/user/{id}")
    public User getById(@PathVariable String id) {
        Optional<User> user = userRepository.findById(id);

        if(user.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return user.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/user")
    public void createUser(@RequestBody User req) {
        String id = req.getId();
        Optional<User> user = userRepository.findById(id);

        if(user.isEmpty()){
            userRepository.save(req);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/user/{id}")
    public void deleteUser(@PathVariable String id){
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        userRepository.deleteById(id);
    }

}
