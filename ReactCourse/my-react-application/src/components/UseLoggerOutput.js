import { useEffect } from 'react'

function UseLoggerOutput(name) {
    useEffect(() =>{
        console.log(name);
    },[name])
}

export default UseLoggerOutput