import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

function UseFieldArray() {
    const {register, control, handleSubmit} = useForm();
    const {fields,append} = useFieldArray({
        control,
        name:'test'
    })

    const onSubmit = (data) =>{
              console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card">
                        <div className="card-header">User Name</div>
                        <div className="card-body">
                        {
                            fields.map((item,index) =>(
                                  <input type="text" 
                                         key={item.id} 
                                         placeholder='Enter Your Name' 
                                         className='form-control mt-3' 
                                         {...register('username')}
                                         name={`test[${index}].username`} />
                                  ))
                                     
                        }
                        <button className='btn btn-primary mt-3' onClick={() => append({username:''})}>Add Name</button>
                        </div>
                    </div>
                    <button className='btn btn-primary mt-3' type='submit'>Submit</button>
                
    </form>

  )
}

export default UseFieldArray