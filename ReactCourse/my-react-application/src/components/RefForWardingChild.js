import React from 'react'

const RefForWardingChild= React.forwardRef( (props,ref) => {
  return (
    <div>
        <input type="text" ref={ref} />
    </div>
  )
})

export default RefForWardingChild