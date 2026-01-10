import { useContext } from "react"
import { StudentContext } from "../contexts/StudentProvider"
const PresentStudentList = ()=>{
        const { studentList,addedInAbsentList} =useContext(StudentContext)

    return(
        <>
         <div className="present_list">
            <h2>PresentList</h2>
              <ul>
                {
                   studentList.map((element)=>{
                    if(element.isPrasent == true){
                        return (<li> {element.name} <button onClick={()=>{addedInAbsentList(element)}}> accidently aded</button>  </li>)
                    }
                   })
                }
              </ul>
         </div>
        </>
    )
}

export default PresentStudentList;