
import { useContext } from "react"
import { StudentContext } from "../contexts/StudentProvider"
const AbsentStudentList = ()=>{
    const {studentList,addedInPresentList} = useContext(StudentContext)
    
  
    return(
        <>
        <div className="present_list">
            <h2>AbsetnList</h2>
              <ul>
                {
                   studentList.map((element)=>{
                    if(element.isPrasent == false){
                        return (<li> {element.name} <button onClick={()=>{addedInPresentList(element)}}> accidently aded</button>  </li>)
                    }
                   })
                }
              </ul>
        </div>
        </>
    )
}

export default AbsentStudentList;