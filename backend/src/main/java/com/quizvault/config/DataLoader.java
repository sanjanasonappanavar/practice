package com.quizvault.backend.config;

import com.quizvault.backend.model.Quiz;
import com.quizvault.backend.repository.QuizRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final QuizRepository repo;

    public DataLoader(QuizRepository repo){
        this.repo = repo;
    }

    @Override
    public void run(String... args){

        if(repo.count()==0){

            Quiz q1 = new Quiz();
            q1.setTitle("Java Quiz");
            q1.setDescription("Basic Java Questions");

            Quiz q2 = new Quiz();
            q2.setTitle("React Quiz");
            q2.setDescription("Frontend Questions");

            repo.save(q1);
            repo.save(q2);
        }

    }

}