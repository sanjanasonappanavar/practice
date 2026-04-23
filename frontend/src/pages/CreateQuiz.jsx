import {useState} from 'react';
import axios from 'axios';

export default function CreateQuiz(){
const [quiz,setQuiz]=useState({
title:'',
description:'',
startTime:'',
endTime:'',
duration:''
});

const save=async()=>{
const user=JSON.parse(localStorage.getItem('user'));

await axios.post('http://localhost:8080/api/quizzes',{
...quiz,
facultyId:user.id,
quizCode:'JAVA'+Math.floor(Math.random()*10000)
});
alert('Quiz Created');
}
return(
<div>
<h2>Create Quiz</h2>
<input placeholder='Title' onChange={e=>setQuiz({...quiz,title:e.target.value})}/>
<input placeholder='Description' onChange={e=>setQuiz({...quiz,description:e.target.value})}/>
<input type='datetime-local' onChange={e=>setQuiz({...quiz,startTime:e.target.value})}/>
<input type='datetime-local' onChange={e=>setQuiz({...quiz,endTime:e.target.value})}/>
<input placeholder='Duration' onChange={e=>setQuiz({...quiz,duration:e.target.value})}/>
<button onClick={save}>Create</button>
</div>
)
}