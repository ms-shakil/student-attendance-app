
import { useState } from 'react';
import './App.css';
import StudentForm from './component/StudentForm';
import StudentSection from './component/StudentSection';

function App() {
  const [studentName ,setStudentName] =useState("")
  const [studentList , setStudentList] =useState([])
  const [editMode , setEditMode ]=useState(false)
  const [updateObject , setUpdateObject]=useState(null)
  return (
    <div className="App">
       
         <StudentForm 
           studentName ={studentName}
           setStudentName ={setStudentName}
           studentList ={studentList}
           setStudentList ={setStudentList}
           updateObject ={updateObject}
           editMode ={editMode}
           setEditMode ={setEditMode}

          />
         <StudentSection
           studentName ={studentName}
           setStudentName ={setStudentName}
           studentList ={studentList}
           setStudentList ={setStudentList}
           setUpdateObject ={setUpdateObject}
           setEditMode ={setEditMode}
         />
    </div>
  );
}

export default App;
