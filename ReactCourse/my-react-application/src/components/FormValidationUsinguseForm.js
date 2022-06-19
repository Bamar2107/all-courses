import React from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames';

function FormValidationUsinguseForm() {

    const {register, handleSubmit, formState:{errors}, getValues} = useForm({
        mode:'onBlur'
    })

    const onSubmit = data => console.log(data);

    const Formtemplate = (props) =>{
        const {register} = props
        return (
            <div className='container py-5'>
            <div className="card border-2 p-3 shadow w-50 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mt-2">
                      <label htmlFor="fullname" className='text-dark'><b>FullName</b></label>
                      <input type="text" placeholder='Enter your Fullname' className={classNames('form-control mt-2', {'is-invalid':errors.fullname})} id='fullname' 
                      {...register('fullname',{required:'Name is required', minLength:{value:5, message:'Please enter minimum 5 character'}})} />
                     <small className='invalid-feedback'><b>{errors.fullname?.message}</b></small>
                  </div>
                  <div className="form-group mt-2">
                      <label htmlFor="email" className='text-dark'><b>Email Address</b></label>
                      <input type="email" placeholder='Enter your Email address' className={classNames('form-control mt-2', {'is-invalid':errors.email})} id='email' 
                      {...register('email', {required:true})} />
                      <small className='invalid-feedback'><b>{errors.email && "Email is required"}</b></small>
                  </div>
                  <div className="form-group mt-2">
                      <label htmlFor="phone" className='text-dark'><b>Phone Number</b></label>
                      <input type="number" placeholder='Enter your Phone Number' className={classNames('form-control mt-2', {'is-invalid':errors.phone})} id='phone' 
                      {...register('phone', {required:'Phone Numner is required', minLength:{value:10,message:'Please enter 10 digit valid phone number'}})} />
                      <small className='invalid-feedback'><b>{errors.phone?.message}</b></small>
                  </div>
                  <div className="form-group mt-2">
                      <label htmlFor="password" className='text-dark'><b>Password</b></label>
                      <input type="password" placeholder='Enter your Password' className={classNames('form-control mt-2', {'is-invalid':errors.password})} id='password' 
                      {...register('password', {required:'Password is required'})} />
                      <small className='invalid-feedback'><b>{errors.password?.message}</b></small>
                  </div>
                  <div className='form-group mt-2'>
                  <label htmlFor="cnfpassword" className='text-dark'><b>Confirm Password</b></label>
                  <input type="password" 
                         placeholder='Confirm password'
                         id='cnfpassword'
                         {...register('cnfpassword',{required:'Confirm password required',
                         validate: value => value === getValues('password') || "Password doesn't match"})} 
                         className={classNames('form-control mt-2', {'is-invalid':errors.cnfpassword})} 
                    />
                   <small className='invalid-feedback'><b>{errors.cnfpassword?.message}</b></small>
                  </div>
                  <div className="form-group mt-2">
                  <label htmlFor="state" className='text-dark'><b>Choose Your State</b></label> <br />
                       <select id="state" className={classNames('w-100 shadow form-control', {'is-invalid':errors.state})} 
                       {...register('state', {required:'Please select atleast one state'})}>
                           <option value="">---Select Your State---</option>
                           <option value="Odisha">Odisha</option>
                           <option value="Maharastra">Maharastra</option>
                           <option value="Bihar">Bihar</option>
                           <option value="Delhi">Delhi</option>
                           <option value="Goa">Goa</option>
                       </select>
                       <small className='invalid-feedback'><b>{errors.state?.message}</b></small>
                  </div>
                  <div className="form-group mt-3">
                      <label className='text-dark'><b>Choose Your Gender</b></label>&nbsp;&nbsp;
                      <div className="form-check form-check-inline">
                      <input type="radio" name='gender' className='form-check-input' value='male' id='male'{...register('male', {required:'Gender is required'})} /> 
                      <label htmlFor="male" className='form-check-label'>Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                      <input type="radio" name='gender' className='form-check-input' value='female' id='female'{...register('female', {required:'Gender is required'})} /> 
                      <label htmlFor="female" className='form-check-label'>Female</label>
                      </div>
                      <div className="form-check form-check-inline">
                      <input type="radio" name='gender' className='form-check-input' value='others' id='others'{...register('others', {required:'Gender is required'})} /> 
                      <label htmlFor="others" className='form-check-label'>Others</label>
                      </div> <br />
                      <small className='form-text text-danger'><b>{errors.male?.message}</b></small>
                  </div>
                  <div className="form-grouo mt-3">
                      <input type="checkbox" id='tnc' {...register('tnc', {required:'Must Check Term & Condition'})}
                      className={classNames({'is-invalid':errors.tnc})} /> <b className='text-primary'>I agree all the terms & conditions</b>
                      <br /><small className='invalid-feedback'><b>{errors.tnc?.message}</b></small>
                  </div>
                  <button type='submit' className='btn btn-primary mt-3'>Create New Account</button> &nbsp;
                  <button type='button' className='btn btn-success mt-3' onClick={() => getValues() }>Get Values</button>
              </form>
            </div>
            </div>
        )
    }
  return (
    <div>
        <Formtemplate register={register}/>
    </div>
  )
}

export default FormValidationUsinguseForm