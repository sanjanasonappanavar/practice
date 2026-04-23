import React,{useState,useEffect} from "react";
import axios from "axios";

export default function Dashboard(){

const [title,setTitle]=useState("");
const [duration,setDuration]=useState(30);
const [questions,setQuestions]=useState([]);

const [currentQuestion,setCurrentQuestion]=useState({
questionText:"",
options:["","","",""],
correctAnswer:""
});

const [myQuizzes,setMyQuizzes]=useState([]);

useEffect(()=>{
axios.get("http://localhost:8080/api/quizzes")
.then(res=>setMyQuizzes(res.data));
},[]);

// ADD QUESTION
const addQuestion=()=>{

if(!currentQuestion.questionText){
alert("Enter question");
return;
}

setQuestions(prev => [...prev, currentQuestion]);

setCurrentQuestion({
questionText:"",
options:["","","",""],
correctAnswer:""
});

};
// SAVE QUIZ
const saveQuiz=()=>{

if(questions.length===0){
alert("Add at least one question");
return;
}

const quizCode=Math.random().toString(36).substring(2,8).toUpperCase();

axios.post("http://localhost:8080/api/quizzes",{
title,
duration,
quizCode,
questions
}).then(()=>{

alert("Quiz Created");

setQuestions([]);
setTitle("");

axios.get("http://localhost:8080/api/quizzes")
.then(res=>setMyQuizzes(res.data));

});

};

return(

<div style={{
minHeight:"100vh",
background:"linear-gradient(135deg,#0b0f1a,#020617)",
color:"white",
padding:"40px"
}}>

<h1 style={{
textAlign:"center",
marginBottom:"30px"
}}>
Create Quizzes here!!
</h1>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"30px"
}}>

{/* LEFT PANEL */}
<div style={{
background:"#1e293b",
padding:"25px",
borderRadius:"20px"
}}>

<h2>Create Quiz</h2>

<input
placeholder="Quiz Title"
value={title}
onChange={e=>setTitle(e.target.value)}
style={inputStyle}
/>

<input
type="number"
value={duration}
onChange={e=>setDuration(e.target.value)}
style={inputStyle}
/>

<h3 style={{marginTop:"20px"}}>Add Question</h3>

<input
placeholder="Question"
value={currentQuestion.questionText}
onChange={e=>setCurrentQuestion({
...currentQuestion,
questionText:e.target.value
})}
style={inputStyle}
/>

{currentQuestion.options.map((op,i)=>(

<input
key={i}
placeholder={`Option ${i+1}`}
value={op}
onChange={e=>{
let newOptions=[...currentQuestion.options];
newOptions[i]=e.target.value;
setCurrentQuestion({
...currentQuestion,
options:newOptions
});
}}
style={inputStyle}
/>

))}

<input
placeholder="Correct Answer"
value={currentQuestion.correctAnswer}
onChange={e=>setCurrentQuestion({
...currentQuestion,
correctAnswer:e.target.value
})}
style={inputStyle}
/>

{/* ADD QUESTION BUTTON */}
<button 
onClick={addQuestion} 
style={{...btnSecondary,marginTop:"15px"}}
>
Add Question
</button>

{/* QUESTIONS LIST */}
<h3 style={{marginTop:"25px"}}>Added Questions</h3>

{questions.map((q,i)=>(

<div key={i} style={{
background:"#020617",
padding:"15px",
borderRadius:"12px",
marginTop:"10px"
}}>

<p><b>Q{i+1}:</b> {q.questionText}</p>

<ul style={{marginLeft:"15px"}}>
{q.options.map((op,index)=>(
<li key={index}>{op}</li>
))}
</ul>

<p style={{color:"#22c55e"}}>
Correct: {q.correctAnswer}
</p>

<button
onClick={()=>{
const updated=[...questions];
updated.splice(i,1);
setQuestions(updated);
}}
style={{
marginTop:"8px",
background:"#ef4444",
border:"none",
padding:"6px 12px",
borderRadius:"8px",
color:"white",
cursor:"pointer"
}}
>
Delete Question
</button>

</div>

))}

{/* ACTION BUTTONS */}
<div style={{display:"flex",gap:"10px",marginTop:"20px"}}>

<button onClick={saveQuiz} style={btnPrimary}>
Save Quiz
</button>

<button
onClick={()=>window.location="/results"}
style={{...btnSecondary,background:"#3b82f6"}}
>
View Results
</button>

</div>

<p style={{marginTop:"10px"}}>
Questions Added: {questions.length}
</p>

</div>

{/* RIGHT PANEL */}
<div style={{
background:"#1e293b",
padding:"25px",
borderRadius:"20px"
}}>

<h2>My Quizzes</h2>

{myQuizzes.map((q,i)=>(

<div key={i} style={{
background:"#0f172a",
padding:"15px",
borderRadius:"12px",
marginTop:"15px"
}}>

<h3>{q.title}</h3>

<p>Code: <b>{q.quizCode}</b></p>

<p style={{fontSize:"13px",color:"#64748b"}}>
http://localhost:5173/attempt/{q.quizCode}
</p>

<div style={{display:"flex",gap:"10px"}}>

<button
onClick={()=>{
navigator.clipboard.writeText(
`http://localhost:5173/attempt/${q.quizCode}`
);
alert("Link Copied");
}}
style={btnPrimary}
>
Copy Link
</button>

<button
onClick={async ()=>{

await axios.delete(
`http://localhost:8080/api/quizzes/${q.id || q._id}`
);

alert("Deleted");

axios.get("http://localhost:8080/api/quizzes")
.then(res=>setMyQuizzes(res.data));

}}
style={{...btnSecondary,background:"#ef4444"}}
>
Delete Quiz
</button>

</div>

</div>

))}

</div>

</div>

</div>

);

}

/* STYLES */
const inputStyle={
width:"100%",
padding:"12px",
marginTop:"10px",
borderRadius:"10px",
border:"none",
background:"#0f172a",
color:"white"
};

const btnPrimary={
padding:"10px 20px",
border:"none",
borderRadius:"10px",
background:"#22c55e",
color:"white",
cursor:"pointer"
};

const btnSecondary={
padding:"10px 20px",
border:"none",
borderRadius:"10px",
background:"#334155",
color:"white",
cursor:"pointer"
};