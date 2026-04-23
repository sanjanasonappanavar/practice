package com.quizvault.backend.model;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.quizvault.backend.model.Question;
@Document(collection="quizzes")
public class Quiz {

    @Id
    private String id;

    private String title;
    private String description;

    private String facultyId;
    private String quizCode;
    private String shareLink;

    private String startTime;
    private String endTime;

    private int duration;
    private boolean published;
    private List<Question> questions;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id=id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title=title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description=description;
    }

    public String getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(String facultyId) {
        this.facultyId=facultyId;
    }

    public String getQuizCode() {
        return quizCode;
    }

    public void setQuizCode(String quizCode) {
        this.quizCode=quizCode;
    }

    public String getShareLink() {
        return shareLink;
    }

    public void setShareLink(String shareLink) {
        this.shareLink=shareLink;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime=startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime=endTime;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration=duration;
    }
    
    public List<Question> getQuestions(){
return questions;
}

public void setQuestions(List<Question> questions){
this.questions=questions;
}
}