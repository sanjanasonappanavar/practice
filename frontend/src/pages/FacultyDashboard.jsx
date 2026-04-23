import {Link} from 'react-router-dom';

export default function FacultyDashboard(){
return(
<div>
<h2>Faculty Dashboard</h2>
<Link to='/create-quiz'>Create Quiz</Link>
<button onClick={()=>window.location='/results'}>
View Student Results
</button>
</div>
)
}