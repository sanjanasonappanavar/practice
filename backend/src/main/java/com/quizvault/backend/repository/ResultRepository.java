package com.quizvault.backend.repository;

import com.quizvault.backend.model.Result;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ResultRepository extends MongoRepository<Result,String> {
 List<Result> findByQuizCode(String quizCode);
}