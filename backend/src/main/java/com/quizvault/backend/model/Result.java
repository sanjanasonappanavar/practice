package com.quizvault.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="results")
public class Result {

 @Id
 private String id;
 private String studentEmail;
 private String quizCode;
 private int score;
 private int total;

 public String getId(){ return id; }
 public void setId(String id){ this.id=id; }

 public String getStudentEmail(){ return studentEmail; }
 public void setStudentEmail(String studentEmail){ this.studentEmail=studentEmail; }

 public String getQuizCode(){ return quizCode; }
 public void setQuizCode(String quizCode){ this.quizCode=quizCode; }

 public int getScore(){ return score; }
  public void setScore(int score){ this.score=score; }

 public int getTotal(){ return total; }
 public void setTotal(int total){ this.total=total; }
}