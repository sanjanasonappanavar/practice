import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function TakeQuiz(){
const {id}=useParams();
const [quiz,setQuiz]=useState({});

useEffect(()=>{
axios.get('http://localhost:8080/api/quizzes/'+id)
.then(r=>setQuiz(r.data));
},[] )

return(
<div>
<h2>{quiz.title}</h2>
<p>{quiz.description}</p>
<button>Start Quiz</button>
</div>
)
}