import React, { useState } from 'react'

function LoginValidate() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErros] = useState({username:'', password:''})

    const submitForm = (event) =>{
                  event.preventDefault();
                  let errorcount = 0
                  if(username ==='')
                  {
                    errorcount++
                      setErros((prevState) =>{
                               return {...prevState, username:'Username is required'}
                      })
                  }
                  else{
                    setErros((prevState) =>{
                        return {...prevState, username:''}
                             })
                  }
                if(password===''){
                    errorcount++
                    setErros((prevState)=>{
                         return {...prevState, password:'Password is required'}
                    })
                }
                else if(password.length<6){
                    setErros((prevState)=>{
                          return {...prevState, password:'Password is too short'}
                    })

                }
                else{
                    setErros((prevState)=>{
                          return {...prevState, password:''}
                    })
                }
              if(errorcount===0){
                const formdata = {username, password};
                console.log(formdata)
                setUserName('')
                setPassword('')  
            }
    }
  return (
    <form className='m-3' onSubmit={submitForm}>
         <input type="text" placeholder='User Name' value={username} onChange={(e)=> setUserName(e.target.value)}/> <br/><br />
         {errors.username && <p>{errors.username}</p>}
         <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br/><br />
         {errors.password && <p>{errors.password}</p>}
         <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default LoginValidate