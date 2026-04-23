package com.quizvault.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.quizvault.backend.repository.QuizRepository;
import com.quizvault.backend.model.Quiz;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository repo;

    public Quiz save(Quiz quiz){
        return repo.save(quiz);
    }

    public List<Quiz> getAll(){
        return repo.findAll();
    }
}