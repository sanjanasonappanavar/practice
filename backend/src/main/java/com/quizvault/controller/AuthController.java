package com.quizvault.backend.controller;

import com.quizvault.backend.model.User;
import com.quizvault.backend.repository.UserRepository;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo){
        this.repo = repo;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user){

        if(repo.findByEmail(user.getEmail()) != null){
            throw new RuntimeException("User already exists");
        }

        return repo.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User req){

        User user = repo.findByEmail(req.getEmail());

        if(user != null &&
           user.getPassword().equals(req.getPassword())){
            return user;
        }

        return null;
    }
}