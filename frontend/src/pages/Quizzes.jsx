import React,{useEffect,useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Quizzes(){

const [quizzes,setQuizzes]=useState([]);
const [code,setCode]=useState("");

const navigate=useNavigate();

useEffect(()=>{
axios
.get("https://quizhub-1-w6co.onrender.com/quizzes")
.then(res=>setQuizzes(res.data));
},[]);

return(

<div style={{
background:"#0b0f1a",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1 style={{
textAlign:"center",
marginBottom:"20px",
fontSize:"48px"
}}>
Quizzes
</h1>

{/* JOIN BY CODE */}
<div style={{
display:"flex",
justifyContent:"center",
marginBottom:"30px"
}}>

<input
placeholder="Enter Quiz Code"
value={code}
onChange={(e)=>setCode(e.target.value)}
style={{
padding:"12px",
borderRadius:"10px 0 0 10px",
border:"none",
width:"250px"
}}
/>

<button
onClick={()=>navigate(`/attempt/${code}`)}
style={{
padding:"12px 20px",
border:"none",
background:"#4f46e5",
color:"white",
borderRadius:"0 10px 10px 0",
cursor:"pointer"
}}
>
Join Quiz
</button>

</div>

{/* QUIZ GRID */}
<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"20px"
}}>

{quizzes.map((q,index)=>(

<div key={index} style={{
background:"#1c2230",
padding:"20px",
borderRadius:"16px",
boxShadow:"0 4px 15px rgba(0,0,0,.3)",
transition:"0.3s"
}}>

<h2>{q.title}</h2>

<p style={{color:"#cbd5e1"}}>
{q.description || "No description"}
</p>

<button
onClick={()=>navigate(`/attempt/${q.quizCode}`)}
style={{
marginTop:"15px",
padding:"10px 20px",
border:"none",
borderRadius:"10px",
background:"#22c55e",
color:"white",
cursor:"pointer"
}}
>
Attempt Quiz
</button>

</div>

))}

</div>

</div>

);

}