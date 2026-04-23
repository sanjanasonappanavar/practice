package com.quizvault.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.quizvault.backend.model.Quiz;

public interface QuizRepository extends MongoRepository<Quiz,String> {
    Quiz findByQuizCode(String quizCode);
}