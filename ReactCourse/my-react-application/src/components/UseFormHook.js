import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

function UseFormHook() {

  const UserInfo = (props) =>{
     const {register, control} = props;
     const {append, fields, remove} = useFieldArray({
       control,
      name:'users'
    })
    return (
      <div className='card m-4'>
        <div className="card-header">User Information</div>
        <div className="card-body">
          {fields.map((item,index) => 
          (
            <div className="form-row form-group" key={item.id}>
            <div className='row m-3'>
            <div className="col">
              <input type="text" className='form-control' placeholder='First Name' {...register('firstname')} 
              name={`users[${item}].firstname`}
              defaultValue={item.firstname} />
            </div>
            <div className="col">
              <input type="text" placeholder='Last Name' className='form-control' {...register('lastname')}
              name={`users[${item}].lastname`} defaultValue={item.lastname} />
            </div>
            <div className="col">
              <input type="email" placeholder='email' className='form-control' {...register('email')}
              name={`users[${item}].email`} defaultValue={item.email} />
            </div>
            <div className="col">
              <select className='form-control' {...register('city')} name={`users[${item}].city`} defaultValue={item.city}  >
                <option value="">Select Your City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            <div className="col">
              <button className='btn btn-danger' onClick={() => remove(index)}>Remove</button>
            </div>
            </div>
          </div>
          ))}
          <button className='btn btn-primary mt-2' onClick={() => append({
            firstname:'', lastname:'', email:'', city:''
          })}>Add user</button>
        </div>
      </div>
    )
  }

    const {register, handleSubmit, formState:{errors},  control} = useForm()

    const onSubmit = data => console.log(data);
   // const username = watch('name');
   // const userPassword = watch('password')
  return (
    <div className='m-3'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Username</label> <br />
            <input type="text" 
            {...register("name",{required:'Name is Required'})} /> 
            <br />
            {/* <p>{username}</p> */}
            <p>{errors.name?.message}</p>
            
            <label htmlFor="password">Password</label> <br />
            <input type="password" 
              {...register("password", 
                           {required:'Password is required', 
                           minLength:{ value:5, message:'Minimum 5 characters is required'
            }})} />
            {/* <p>{userPassword}</p> */}
            <p>{errors.password?.message}</p>
            <label htmlFor="age">Age</label><br />
            <input type="number"  {...register('age',{required:'Age is required'}, {min:18, max:99})}/>
            <p>{errors.age?.message}</p>
            <label htmlFor="gender">Gender</label>&nbsp;
            <select {...register('gender')}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
            <br /><br />
            
            <UserInfo register={register} control={control}/>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        
        

        <br />
        <p><code>One of the core concept of react-hook-form is to register your component into the hook.
        This will make its value available for both form validations & submission </code></p>
        <p><span>Note: </span> Each field required to have a name as a key.</p>
    </div>
  )
}

export default UseFormHook