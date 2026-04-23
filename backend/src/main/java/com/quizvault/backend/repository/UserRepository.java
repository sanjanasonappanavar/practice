package com.quizvault.backend.repository;

import com.quizvault.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {

User findByEmail(String email);

}