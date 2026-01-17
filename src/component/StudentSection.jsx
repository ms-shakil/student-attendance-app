import '../App.css';
import AbsentStudentList from './AbsentStudentList';
import PresentStudentList from './PresentStudentList';
import StudentList from './StudentList';

import { StudentContext } from '../contexts/StudentProvider';
import { useContext } from 'react';
const StudentSection = ()=>{
    const {studentStates,dispatch} =useContext(StudentContext)
    return(
        <div className="student_section">
         <StudentList   
  
         />
         <PresentStudentList 
       
         />
         <AbsentStudentList
          />

        </div>
    )
}

export default StudentSection;