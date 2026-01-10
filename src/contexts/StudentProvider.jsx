
import { createContext, useState } from "react";

export const StudentContext = createContext()

const StudentProvider  = (props)=>{
    const {children} =props
  const [studentName ,setStudentName] =useState("")
  const [studentList , setStudentList] =useState([])
  const [editMode , setEditMode ]=useState(false)
  const [updateObject , setUpdateObject]=useState(null)
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
      const addedInPresentList  =(el)=>{
        const newArr = studentList.map((element)=>{
            if(el.id === element.id){
                return{...element, isPrasent:true}
            }
            return element
        })
        setStudentList(newArr)
    }
        const addedInAbsentList  =(el)=>{
        const newArr = studentList.map((element)=>{
            if(el.id === element.id){
                return{...element, isPrasent:false}
            }
            return element
        })
        setStudentList(newArr)
    }
  const  contextValue ={
    studentName,
    setStudentName,
    studentList,
    setStudentList,
    editMode,
    setEditMode,
    updateObject,
    setUpdateObject,
    changeHandler,
    submitHandler,
    createHandler,
    updateHandler,editHandler,
    deleteHandler,
    addAbsentList,
    addPresentList,
    addedInPresentList,
    addedInAbsentList
    
  }
  return <StudentContext.Provider value={contextValue} > {children}  </StudentContext.Provider>
}



export default StudentProvider;