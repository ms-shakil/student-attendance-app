import { useContext } from 'react';
import '../App.css';
import { StudentContext } from '../contexts/StudentProvider';
const StudentForm = ()=>{
    const {studentName,
       
        studentStates,
        dispatch,
        changeHandler,
        submitHandler,
        createHandler,
        updateHandler
    } =useContext(StudentContext)
 
    return(
          <div>
             <form onSubmit={submitHandler}>
                  <h1> Student Attendance App</h1>
                   <div>
                       <input type="text" value={studentStates.studentName}  onChange={changeHandler}/>
                       <button type='submit'> { studentStates.editMode ? " update data" :" add data"} </button>
                   </div>
             </form>
          </div>
    )
}
export default StudentForm;