import '../App.css';
import AbsentStudentList from './AbsentStudentList';
import PresentStudentList from './PresentStudentList';
import StudentList from './StudentList';

import { StudentContext } from '../contexts/StudentProvider';
import { useContext } from 'react';
const StudentSection = ()=>{
    const {studentName,setStudentName,studentList,setStudentList,setUpdateObject,setEditMode} =useContext(StudentContext)
    return(
        <div className="student_section">
         <StudentList   
           studentName ={studentName} 
           setStudentName ={setStudentName}    
           studentList ={studentList}   
           setStudentList ={setStudentList}   
           setUpdateObject ={setUpdateObject}
           setEditMode ={setEditMode}
             
         />
         <PresentStudentList 
          studentList ={studentList}
          setStudentList ={setStudentList} 
         />
         <AbsentStudentList
          studentList ={studentList}
          setStudentList ={setStudentList} 
          />

        </div>
    )
}

export default StudentSection;