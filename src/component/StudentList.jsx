

const StudentList = (props)=>{
    const {studentList,setStudentList,studentName,setStudentName,setUpdateObject,setEditMode} =props
    const editHandler =(element)=>{
        setStudentName(element.name)  
        setUpdateObject(element)
        setEditMode(true)
     
    }
  const  deleteHandler =(element)=>{
      const newArr = studentList.filter((el)=>{
        if(el.id !== element.id){
            return el
        }
      })
      setStudentList(newArr)
  }
  const addPresentList =(el)=>{
        if(el.isPrasent !== undefined){
            return alert(`This student already aded in ${el.isPrasent ? "presentList" :"absentList"}`)
        }
         const newArr = studentList.map((element)=>{
            if(element.id === el.id){
                return {...element,isPrasent:true}
            }
            return element
         })
         setStudentList (newArr)
  } 
    const addAbsentList =(el)=>{
        if(el.isPrasent !== undefined){
            return alert(`This student already aded in ${el.isPrasent ? "presentList" :"absentList"}`)
        }
         const newArr = studentList.map((element)=>{
            if(element.id === el.id){
                return {...element,isPrasent:false}
            }
            return element
         })
         setStudentList (newArr)
  }  
 

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