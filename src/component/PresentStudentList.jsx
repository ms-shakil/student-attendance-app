
const PresentStudentList = (props)=>{
    const { studentList,setStudentList} =props
        const addedInAbsentList  =(el)=>{
        const newArr = studentList.map((element)=>{
            if(el.id === element.id){
                return{...element, isPrasent:false}
            }
            return element
        })
        setStudentList(newArr)
    }
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