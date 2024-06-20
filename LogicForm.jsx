import React, { useState } from 'react';


function LogicForm(){
  const[user,setuser] = useState("")
  const[pass,setpas] = useState("")

  const handlesubmit = (event) =>{
    event.preventDefault()
    setuser("")
    setpas("")
    console.log(user,pass)
  }


  return(
    <>
    <form onSubmit={handlesubmit} >
     <input type="text" value={user} onChange={(event)=>{setuser(event.target.value)}} />
     <input type="password" value={pass} onChange={(event)=>{setpas(event.target.value)}}  />
     <button  type='submit'>login</button>
     </form>
    </>
  )
}
  

export default LogicForm;