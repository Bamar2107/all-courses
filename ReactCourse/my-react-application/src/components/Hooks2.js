import React, { useEffect, useState } from 'react'

function Hooks2() {

const [content, setContent] = useState('Posts');
const [count,setCount] = useState(0);

//for fetchapi
//const [items, setItems] = useState([]);

useEffect(()=>{
  console.log(`componentDidMount`);
},[])

useEffect(()=>{
    //we can use the fetch api here using fetch function
    //fetch('https://jsonplaceholder.typicode.com/'+content).then(response => response.json()).then(json => setItems(json)) 
    console.log(`componentDidUpdate`)
    return () =>{
        //clean up code here
        console.log(`componentUnmount`);
    }
},[content])

return (
    <div>
        <button className='btn btn-primary mt-3' onClick={() => setContent('Posts')}>Posts</button> &nbsp;
        <button className='btn btn-primary mt-3' onClick={() => setContent('Users')}>Users</button> &nbsp;
        <button className='btn btn-primary mt-3' onClick={() => setContent('Comments')}>Comments</button> &nbsp;
        <button className="btn btn-primary mt-3" onClick={()=>setCount(count+1)}>Add</button>
        <br />
        <h5>{content}</h5>
        <br />
        Count : {count}
        
        {/* <ul>
            {items && items.map(item =>{
                return <li key={item.id}>{item.user}</li>
            })}     
        </ul> */}
    </div>
  )
}

export default Hooks2