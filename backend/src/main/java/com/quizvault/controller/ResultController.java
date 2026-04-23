package com.quizvault.backend.controller;

import com.quizvault.backend.model.Result;
import com.quizvault.backend.repository.ResultRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/results")
@CrossOrigin("*")
public class ResultController {

 private final ResultRepository repo;

 public ResultController(ResultRepository repo){
   this.repo=repo;
 }
 @PostMapping
 public Result save(@RequestBody Result result){
   return repo.save(result);
 }

 @GetMapping("/{quizCode}")
 public List<Result> getResults(@PathVariable String quizCode){
   return repo.findByQuizCode(quizCode);
 }
}