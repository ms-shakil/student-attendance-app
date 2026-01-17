import { useContext } from "react"
import { StudentContext } from "../contexts/StudentProvider"
const PresentStudentList = ()=>{
        const { studentStates, dispatch} =useContext(StudentContext)

    return(
        <>
         <div className="present_list">
            <h2>PresentList</h2>
              <ul>
                {
                   studentStates.studentList.map((element)=>{
                    if(element.isPresent == true){
                        return (<li> {element.name} <button onClick={()=>{dispatch({type:"present_or_absent",payload:{id:element.id,isPresent:false,condi:element.isPresent}})}}> accidently aded</button>  </li>)
                    }
                   })
                }
              </ul>
         </div>
        </>
    )
}

export default PresentStudentList;