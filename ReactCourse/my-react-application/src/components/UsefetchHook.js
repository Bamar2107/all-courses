import React from 'react'
import useFetch from 'react-fetch-hook'


export default function UsefetchHook() {
  const {data, isLoading, error} =  useFetch('https://jsonplaceholder.typicode.com/posts')
  if(error){
      return <div> Error : {error.message}</div>
  }else if (isLoading){
      return <div>Loading.....</div>
  }else{
      return(
          <ul>
              {data.map((item) =>(
                  <li key={item.id}>
                      {item.title}
                  </li>
              ))}
          </ul>
      )
  }
}