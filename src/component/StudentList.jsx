
import { useContext } from "react"
import { StudentContext } from "../contexts/StudentProvider"
const StudentList = ()=>{
    const {studentStates,dispatch} =useContext(StudentContext)

 

    return(
         <div className="student_list">
            <h2> StudentList</h2>
             <ul>
                {
                    studentStates.studentList.map((element)=>(
                        <li key={element.id}> {element.name }
                         <button onClick={()=> {dispatch({type:"edit",payload:element})}}>edit</button>  
                         <button onClick={()=>{dispatch({type:"delete",payload:element})}}> delete</button>
                         <button onClick={()=>{dispatch({type:"present_or_absent",payload:{id:element.id,isPresent:true ,condi:element.isPresent}})}}> add Present</button>
                         <button onClick={()=>{dispatch({type:"present_or_absent",payload:{id:element.id,isPresent:false,condi:element.isPresent}})}}>add Absent</button>
                        </li>
                    ))
                }
             </ul>
         </div>
    )
}
export default StudentList ;