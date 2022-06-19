import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Example = () =>{
   const {data,isLoading,error} =   useQuery('repoData', () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()))

   if (error) {
       return <div>An error has occured {error.message}</div>
   }
   else if (isLoading){
       return <div>Loading.....</div>
   }
   else{
       return (
           <div>
               <ul>
                   {data.map((item) =>(
                       <li key={item.id}>
                           {item.title}
                       </li>
                   ))}
               </ul>
           </div>
       )
   }
}

function UseQueryHook() {
  return (
    <div>
          <QueryClientProvider client={queryClient}>
              <Example/>
          </QueryClientProvider>
    </div>
  )
}

export default UseQueryHook