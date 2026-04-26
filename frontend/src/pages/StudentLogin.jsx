import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function StudentLogin(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=()=>{

axios.post(
"http://localhost:8080/api/auth/login",
{
  email,
  password
}
).then(res=>{
console.log("LOGIN SUCCESS:", res.data);
localStorage.setItem(
"user",
JSON.stringify(res.data)
);

if(res.data.role==="STUDENT"){
navigate("/quizzes");
}

}).catch(()=>{
    
alert("Invalid Login");
});

};

return(

<div style={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#0b0f1a,#121a30)"
}}>

<div style={{
background:"rgba(28,34,48,.92)",
padding:"50px",
borderRadius:"24px",
width:"420px",
boxShadow:"0 8px 30px rgba(0,0,0,.45)"
}}>

<h1 style={{
color:"white",
textAlign:"center",
marginBottom:"30px"
}}>
Student Login
</h1>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
padding:"16px",
marginBottom:"18px",
borderRadius:"12px"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"16px",
marginBottom:"25px",
borderRadius:"12px"
}}
/>

<button
onClick={login}
style={{
width:"100%",
padding:"16px",
border:"none",
borderRadius:"12px",
background:"#0ea5e9",
color:"white",
fontSize:"18px"
}}
>
Login
</button>

<p
style={{
color:"#cbd5e1",
textAlign:"center",
marginTop:"20px",
cursor:"pointer"
}}
onClick={()=>navigate("/student-register")}
>
New user? Create Account
</p>

</div>

</div>

);

}