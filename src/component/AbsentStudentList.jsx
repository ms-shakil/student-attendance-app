

const AbsentStudentList = (props)=>{
    const {studentList,setStudentList} =props
    const addedInPresentList  =(el)=>{
        const newArr = studentList.map((element)=>{
            if(el.id === element.id){
                return{...element, isPrasent:true}
            }
            return element
        })
        setStudentList(newArr)
    }
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