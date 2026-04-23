package com.quizvault.backend.controller;

import com.quizvault.backend.model.Quiz;
import com.quizvault.backend.repository.QuizRepository;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin("*")
public class QuizController {

 private final QuizRepository repo;

 public QuizController(QuizRepository repo){
   this.repo=repo;
 }

 @GetMapping
 public List<Quiz> getAll(){
   return repo.findAll();
 }

 @PostMapping
 public Quiz createQuiz(@RequestBody Quiz quiz){
   return repo.save(quiz);
 }
 @GetMapping("/code/{quizCode}")
public Quiz getByCode(
@PathVariable String quizCode
){
return repo.findByQuizCode(quizCode);
}
@DeleteMapping("/{id}")
public void deleteQuiz(@PathVariable String id){
    repo.deleteById(id);
}
}