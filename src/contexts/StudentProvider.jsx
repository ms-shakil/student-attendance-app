
import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer ,useEffect} from "react";

export const StudentContext = createContext()

 
const dataState = {
    studentName:"",
    studentList:[],
    editMode :false,
    updateObject:null
}
const StudentReducer = (state, action)=>{
    switch(action.type){
        case "onChange":{
           return{
            ...state,
            studentName:action.payload
           }
        }
        case "setData":{
            return{
                ...state,
                studentList:action.payload
            }
        }
        // case "create":{

       
        //    return{
        //     ...state,
        //    studentList:[...state.studentList,newData],
        //    studentName:""
        //    }
        // }
        case "edit":{
            console.log(state.studentList)
            return{
                ...state,
                editMode:true,
                updateObject: action.payload,
                studentName:action.payload.name
            }
            

        }
        // case "update":{
        //     return{
        //         ...state,
        //         studentList: state.studentList.map((item)=>{
        //             if(item.id === state.updateObject.id){
        //                 return{...item,name:state.studentName}
        //             }else{
        //                 return item
        //             }
        //         })
        //         ,
        //         editMode:false,
        //         studentName:""
        //     }

        // }
        // case "delete":{
        //     return{
        //         ...state,
        //         studentList:state.studentList.filter((el)=>{
        //           if(el.id !== action.payload.id){
        //               return el
        //                }
        //             })
        //     }
        // }
        case "present_or_absent":{
           
      
          
           
         return{
            ...state,
            studentList:state.studentList.map((element)=>{
            if(element.id === action.payload.id){
                 
                return {...element,isPresent:action.payload.isPresent}
            }
            return element
              })

            }
         }
         default:{
            return state
         }
        

}
}
const StudentProvider  = (props)=>{

    const [studentStates, dispatch] =useReducer(StudentReducer,dataState)
    const  getAllData = ()=>{
        fetch("http://localhost:4000/note")
        .then((response)=> response.json())
        .then((data)=>{
            dispatch({type:"setData",payload:data})
        })
    }


    useEffect(()=>{
        getAllData()
      },[])

    // create data/Post
    const postData =(newData)=>{
        fetch("http://localhost:4000/note",{
            method:"POST",
            body:JSON.stringify(newData),
            headers:{
                "Content-type":"application/json",
            }
        }).then(()=>{
            studentStates.studentName=""
            getAllData()
        })
    }
    // PUT
        const putData =()=>{
            const {id ,...rest}=studentStates.updateObject
            const updateNode ={...rest, name:studentStates.studentName}

        fetch(`http://localhost:4000/note/${studentStates.updateObject.id}`,{
            method:"PUT",
            body:JSON.stringify(updateNode),
            headers:{
                "Content-type":"application/json",
            }
        }).then(()=>{
            studentStates.studentName=""
            getAllData()
        })
    }
    //delete
    const deletHand =((element)=>{
        fetch(`http://localhost:4000/note/${element.id}`,{
            method:"DELETE"
        }).then(()=>{
            getAllData()
        })
    })

    

    const {children} =props
//   const [studentName ,setStudentName] =useState("")
//   const [studentList , setStudentList] =useState([])
//   const [editMode , setEditMode ]=useState(false)
//   const [updateObject , setUpdateObject]=useState(null)
     const changeHandler =(e)=>{
       
        dispatch({type:"onChange",payload:e.target.value})
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        const newData ={
            id:Date.now()+"",
            name:studentStates.studentName,
            isPresent:undefined
           }
        if(studentStates.studentName.trim() === ""){
            return alert("invalid input")
        }
        if(studentStates.editMode == false){
            postData(newData)
        }else{
            putData(newData)
        }
        // studentStates.editMode ? dispatch({type:"update"}):dispatch({type:"create"})

    }
//     const createHandler =()=>{
//         const newData ={
//             id: Date.now() +"",
//             name:studentName,
//             isPrasent:undefined
//         }
//         setStudentList([...studentList,newData])
//         setStudentName("")
//     }
//     const updateHandler =()=>{
//           const updateList = studentList.map((element)=>{
//             if(element.id == updateObject.id){
//                 return {...element, name:studentName}
//             }
//             return element
//           })
//           setStudentList (updateList)
//           setStudentName("")
//           setEditMode(false)
//     }
    
//     const editHandler =(element)=>{
//         setStudentName(element.name)  
//         setUpdateObject(element)
//         setEditMode(true)
     
//     }
//   const  deleteHandler =(element)=>{
//       const newArr = studentList.filter((el)=>{
//         if(el.id !== element.id){
//             return el
//         }
//       })
//       setStudentList(newArr)
//   }
 
//     const addAbsentList =(el)=>{
//         if(el.isPrasent !== undefined){
//             return alert(`This student already aded in ${el.isPrasent ? "presentList" :"absentList"}`)
//         }
//          const newArr = studentStates.studentList.map((element)=>{
//             if(element.id === el.id){
//                 return {...element,isPrasent:false}
//             }
//             return element
//          })
         
//   }  
//       const addedInPresentList  =(el)=>{
//         const newArr = studentStates.studentList.map((element)=>{
//             if(el.id === element.id){
//                 return{...element, isPrasent:true}
//             }
//             return element
//         })
        
//     }
//         const addedInAbsentList  =(el)=>{
//         const newArr = studentStates.studentList.map((element)=>{
//             if(el.id === element.id){
//                 return{...element, isPrasent:false}
//             }
//             return element
//         })
       
//     }
  const  contextValue ={
   studentStates,
   dispatch,
    changeHandler,
    submitHandler,deletHand}
  return <StudentContext.Provider value={contextValue} > {children}  </StudentContext.Provider>
}



export default StudentProvider ;