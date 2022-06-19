import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
      const ref = useRef('red')

     useEffect( () =>{
         ref.current = 'yellow'
         console.log(ref, `useEffect`);
         
    })

    useLayoutEffect( () =>{
        console.log(ref,` useLayoutEffect`);
        window.scrollBy(0,1000)
    })

    return (
    <div style={{height:'2000px'}}>
     <p><code>
     UseLayoutEffect() call before the rendering of element in the DOM & after rendering or when DOM is ready useEffect() will call. 
     If we want to do some changes on a perticular element before it's rendering then in that case we can use UseLayoutEffect().
     </code></p>
    </div>
  )
}

export default UseLayoutEffect