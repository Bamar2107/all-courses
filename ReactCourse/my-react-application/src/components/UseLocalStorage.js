import { useEffect } from 'react'


function getSavedvalue(key,value){
    const savedValue =   JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue
    return value
}



function UseLocalStorage(key,value) {

        const [updatedvalue, setUpdatedValue] = useEffect(() =>{
            return getSavedvalue(key,value)
        })
            
    useEffect( ()=>{
        localStorage.setItem(key,JSON.stringify(updatedvalue))
    },[key,updatedvalue])
  return [updatedvalue, setUpdatedValue]
}

export default UseLocalStorage