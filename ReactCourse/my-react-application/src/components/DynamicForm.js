import React, { useState } from 'react'

function DynamicForm() {
  const [form, setForm] = useState([])

  const handleAddLink= () =>{
      const inputState ={
          Platform:'',
          Username:''
      }

      setForm( (prevState) => [...prevState,inputState])
  }
  return (
    <div>
        <h1>Add Links</h1>
        <p>Add Links to sites you want to share with your friends</p>
        <form>
           {form.map( (item,index) =>
               <div className='row' key={`item= ${index}`}>
                   <div className="col">
                      <input type="text" className='form-control' name='platform' placeholder='Platform'/>

                   </div>
               </div>
           )}



            <button className='btn btn-primary' onClick={handleAddLink}>Add a Link</button>
        </form>
    </div>
  )
}

export default DynamicForm