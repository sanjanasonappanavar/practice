import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import Dashboard from "./pages/Dashboard";
import FacultyLogin from "./pages/FacultyLogin";
import StudentLogin from "./pages/StudentLogin";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import FacultyRegister from "./pages/FacultyRegister";
import StudentRegister from "./pages/StudentRegister";
import AttemptQuiz from "./pages/AttemptQuiz";
import Results from './pages/Results';

function App(){
 return(
  <Router>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/quizzes" element={<Quizzes/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path='/faculty-login' element={<FacultyLogin/>}/>
    <Route path='/student-login' element={<StudentLogin/>}/>
    <Route path='/create-quiz' element={<CreateQuiz/>}/>
    <Route path='/take-quiz/:id' element={<TakeQuiz/>}/>
    <Route path='/faculty-register' element={<FacultyRegister/>}/>
    <Route path='/student-register' element={<StudentRegister/>}/>
    <Route path='/attempt/:quizCode' element={<AttemptQuiz/>}/>
    <Route path='/results' element={<Results/>} />
   </Routes>
  </Router>
 );
}

export default App;