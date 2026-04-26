import React,{useState} from "react";
import axios from "axios";

export default function Results(){

const [quizCode,setQuizCode]=useState("");
const [data,setData]=useState([]);

const loadResults=()=>{

axios.get(
`https://quizhub-1-w6co.onrender.com/api/results/${quizCode}`
)
.then(res=>setData(res.data));

};

return(

<div style={{
background:"#0b0f1a",
minHeight:"100vh",
color:"white",
padding:"40px"
}}>

<h1 style={{textAlign:"center"}}>
View Results
</h1>

{/* INPUT */}
<div style={{
display:"flex",
justifyContent:"center",
marginTop:"30px"
}}>

<input
placeholder="Enter Quiz Code"
value={quizCode}
onChange={(e)=>setQuizCode(e.target.value)}
style={{
padding:"12px",
borderRadius:"10px 0 0 10px",
border:"none",
width:"250px"
}}
/>

<button
onClick={loadResults}
style={{
padding:"12px 20px",
border:"none",
background:"#3b82f6",
color:"white",
borderRadius:"0 10px 10px 0"
}}
>
View
</button>

</div>

{/* RESULTS */}
<div style={{
maxWidth:"700px",
margin:"40px auto"
}}>

{data.length===0 && (
<p style={{textAlign:"center"}}>
No results to show
</p>
)}

{data.map((r,i)=>(

<div key={i} style={{
background:"#1e293b",
padding:"15px",
borderRadius:"12px",
marginBottom:"15px"
}}>

<h3>{r.studentEmail}</h3>

<p>
Score: <b>{r.score}/{r.total}</b>
</p>

</div>

))}

</div>

</div>

);

}