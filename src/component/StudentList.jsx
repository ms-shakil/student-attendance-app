
import { useContext } from "react"
import { StudentContext } from "../contexts/StudentProvider"
const StudentList = ()=>{
    const {studentList,setStudentList,setStudentName,setUpdateObject,
        setEditMode,editHandler,deleteHandler,addAbsentList,addPresentList

    } =useContext(StudentContext)

 

    return(
         <div className="student_list">
            <h2> StudentList</h2>
             <ul>
                {
                    studentList.map((element)=>(
                        <li key={element.id}> {element.name }
                         <button onClick={()=>{editHandler(element)}}>edit</button>  
                         <button onClick={()=>{deleteHandler(element)}}> delete</button>
                         <button onClick={()=>{addPresentList(element)}}> add Present</button>
                         <button onClick={()=>{addAbsentList(element)}}>add Absent</button>
                        </li>
                    ))
                }
             </ul>
         </div>
    )
}
export default StudentList ;