import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function FacultyLogin(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=()=>{

axios.post(
"https://quizhub-1-w6co.onrender.com/api/auth/login",
{
  username: email,
  password
}
).then(res=>{
console.log("LOGIN SUCCESS:", res.data);
localStorage.setItem(
"user",
JSON.stringify(res.data)
);

if(res.data.role==="FACULTY"){
navigate("/dashboard");
}

}).catch(()=>{
    console.error(err);
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
Faculty Login
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
background:"#4f46e5",
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
onClick={()=>navigate("/faculty-register")}
>
New user? Create Account
</p>

</div>

</div>

);

}