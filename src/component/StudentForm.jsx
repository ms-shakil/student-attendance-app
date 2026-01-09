import '../App.css';

const StudentForm = (props)=>{
    const {studentName,setStudentName,studentList,setStudentList,updateObject,editMode,setEditMode} =props
    const changeHandler =(e)=>{
        setStudentName(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        
        if(studentName.trim() === ""){
            return alert("invalid input")
        }
        editMode ? updateHandler():createHandler()

    }
    const createHandler =()=>{
        const newData ={
            id: Date.now() +"",
            name:studentName,
            isPrasent:undefined
        }
        setStudentList([...studentList,newData])
        setStudentName("")
    }
    const updateHandler =()=>{
          const updateList = studentList.map((element)=>{
            if(element.id == updateObject.id){
                return {...element, name:studentName}
            }
            return element
          })
          setStudentList (updateList)
          setStudentName("")
          setEditMode(false)
    }
    return(
          <div>
             <form onSubmit={submitHandler}>
                  <h1> Student Attendance App</h1>
                   <div>
                       <input type="text" value={studentName}  onChange={changeHandler}/>
                       <button type='submit'> { editMode ? " update data" :" add data"} </button>
                   </div>
             </form>
          </div>
    )
}
export default StudentForm;