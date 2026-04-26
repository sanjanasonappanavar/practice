import axios from "axios";

const API_URL="http://quizhub-1-w6co.onrender.com/api/quizzes";

export const getQuizzes = async()=>{
 const res = await axios.get(API_URL);
 return res.data;
}