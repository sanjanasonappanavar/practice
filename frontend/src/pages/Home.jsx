import React from "react";
import {useNavigate} from "react-router-dom";
import bg from "../assets/bg.jpg";

export default function Home(){

const navigate=useNavigate();

return(

<div style={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundImage:`url(${bg})`,

backgroundSize:"cover",

backgroundPosition:"center",

backgroundRepeat:"no-repeat",
}}>

<div style={{
background:"#1c2230",
padding:"60px",
borderRadius:"24px",
boxShadow:"0 8px 30px rgba(0,0,0,.45)",
textAlign:"center",
width:"500px"
}}>

<h1 style={{
color:"white",
fontSize:"56px",
marginBottom:"15px"
}}>
QuizHub
</h1>

<p style={{
color:"#cbd5e1",
fontSize:"20px",
marginBottom:"40px"
}}>
Create and Attend Quizzes Effortlessly
</p>

<h2 style={{color:"white"}}>
Faculty Portal
</h2>

<button
style={{
width:"100%",
padding:"16px",
marginBottom:"15px",
borderRadius:"14px",
border:"none",
background:"#4f46e5",
color:"white"
}}
onClick={()=>navigate("/faculty-login")}
>
Faculty Login
</button>

<button
style={{
width:"100%",
padding:"16px",
marginBottom:"30px",
borderRadius:"14px",
border:"none",
background:"#6366f1",
color:"white"
}}
onClick={()=>navigate("/faculty-register")}
>
Faculty Register
</button>

<h2 style={{color:"white"}}>
Student Portal
</h2>

<button
style={{
width:"100%",
padding:"16px",
marginBottom:"15px",
borderRadius:"14px",
border:"none",
background:"#0ea5e9",
color:"white"
}}
onClick={()=>navigate("/student-login")}
>
Student Login
</button>

<button
style={{
width:"100%",
padding:"16px",
borderRadius:"14px",
border:"none",
background:"#38bdf8",
color:"white"
}}
onClick={()=>navigate("/student-register")}
>
Student Register
</button>

</div>

</div>

);

}