import React,{useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function AttemptQuiz(){

const {quizCode}=useParams();

const [quiz,setQuiz]=useState(null);
const [answers,setAnswers]=useState({});
const [timeLeft,setTimeLeft]=useState(0);

const [submitted,setSubmitted]=useState(false);
const [result,setResult]=useState(null);

useEffect(()=>{

axios
.get(`https://quizhub-1-w6co.onrender.com/api/quizzes/code/${quizCode}`)
.then(res=>{

setQuiz(res.data);

if(res.data.duration){
setTimeLeft(res.data.duration*60);
}

});

},[]);

useEffect(()=>{

if(timeLeft<=0 || submitted) return;

const timer=setInterval(()=>{

setTimeLeft(prev=>{

if(prev===1){

clearInterval(timer);

alert("Time Up. Auto Submitting.");

submitQuiz();

return 0;
}

return prev-1;

});

},1000);

return ()=>clearInterval(timer);

},[timeLeft,submitted]);

const chooseAnswer=(qIndex,value)=>{

setAnswers({
...answers,
[qIndex]:value
});

};

const submitQuiz = async()=>{

if(submitted) return;

setSubmitted(true);

let score=0;

quiz.questions.forEach((q,index)=>{

if(
answers[index]?.trim().toLowerCase()
===
q.correctAnswer?.trim().toLowerCase()
){
score++;
}

});

const user=JSON.parse(localStorage.getItem("user"));

await axios.post(
"https://quizhub-1-w6co.onrender.com/api/results",
{
studentEmail:user?.email || "unknown",
quizCode:quiz.quizCode,
score:score,
total:quiz.questions.length
}
);

setResult({
score:score,
total:quiz.questions.length
});

};

if(!quiz || !quiz.questions){

return(
<h2 style={{color:"white"}}>
No Questions Found
</h2>
);

}

if(result){

return(

<div style={{
background:"#0b0f1a",
minHeight:"100vh",
color:"white",
padding:"30px"
}}>

<div style={{
maxWidth:"800px",
margin:"auto"
}}>

<h1 style={{textAlign:"center"}}>
Quiz Submitted
</h1>

<h2 style={{textAlign:"center",marginBottom:"30px"}}>
Score: {result.score}/{result.total}
</h2>

{quiz.questions.map((q,index)=>{

const selected=answers[index];
const correct=q.correctAnswer;

return(

<div key={index} style={{
background:"#1c2230",
padding:"20px",
borderRadius:"16px",
marginBottom:"20px"
}}>

<h3>Q{index+1}. {q.questionText}</h3>

{q.options.map((op,i)=>{

let bg="#0f172a";

if(op===correct){
bg="#14532d"; // green (correct)
}
else if(op===selected){
bg="#7f1d1d"; // red (wrong selected)
}

return(

<div key={i} style={{
padding:"10px",
marginTop:"8px",
background:bg,
borderRadius:"10px"
}}>

{op}

{op===correct && " ✅"}
{op===selected && op!==correct && " ❌"}

</div>

);

})}

</div>

);

})}

<div style={{textAlign:"center",marginTop:"30px"}}>

<button
onClick={()=>window.location="/quizzes"}
style={{
padding:"12px 30px",
border:"none",
borderRadius:"10px",
background:"#22c55e",
color:"white"
}}
>
Back to Quizzes
</button>

</div>

</div>

</div>

);

}

return(

<div style={{
background:"#0b0f1a",
minHeight:"100vh",
color:"white",
padding:"30px"
}}>

{/* HEADER */}
<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"30px"
}}>

<h1>{quiz.title}</h1>

<div style={{
background:"#1c2230",
padding:"10px 20px",
borderRadius:"12px"
}}>
Time Left: {Math.floor(timeLeft/60)}:
{String(timeLeft%60).padStart(2,"0")}
</div>

</div>

{/* QUESTIONS */}
<div style={{
maxWidth:"800px",
margin:"auto"
}}>

{quiz.questions.map((q,index)=>(

<div key={index} style={{
background:"#1c2230",
padding:"20px",
borderRadius:"16px",
marginBottom:"20px"
}}>

<h3>Q{index+1}. {q.questionText}</h3>

{q.options.map((op,i)=>(

<label key={i} style={{
display:"block",
padding:"10px",
marginTop:"8px",
background:"#0f172a",
borderRadius:"10px",
cursor:"pointer"
}}>

<input
type="radio"
name={index}
value={op}
onChange={()=>chooseAnswer(index,op)}
style={{marginRight:"10px"}}
/>

{op}

</label>

))}

</div>

))}

</div>

{/* SUBMIT */}
<div style={{
textAlign:"center",
marginTop:"30px"
}}>

<button
onClick={submitQuiz}
disabled={submitted}
style={{
padding:"15px 40px",
fontSize:"18px",
border:"none",
borderRadius:"12px",
background:"#22c55e",
color:"white",
opacity:submitted?0.6:1
}}
>
Submit Quiz
</button>

</div>

</div>

);

}