import React, { useState } from 'react'
export default ({ defaultVal = ''}) => {
  const [val, setVal] = useState(defaultVal)
  const handleChange = e => {
    setVal(e.target.value)
  }

  return (
    <div className="aa">
      <input value={val} onChange={handleChange} placeholder="请输入"/>
    </div>
  )
}