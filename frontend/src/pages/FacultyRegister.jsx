import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function FacultyRegister(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const register=()=>{

axios.post(
"http://localhost:8080/api/auth/register",
{
email,
password,
role:"FACULTY"
}
).then(()=>{

alert("Account Created Successfully");
navigate("/faculty-login");

}).catch(()=>{
alert("Registration Failed");
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
Faculty Register
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
onClick={register}
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
Create Account
</button>

<p
style={{
color:"#cbd5e1",
textAlign:"center",
marginTop:"20px",
cursor:"pointer"
}}
onClick={()=>navigate("/faculty-login")}
>
Already have account? Login
</p>

</div>

</div>

);
}