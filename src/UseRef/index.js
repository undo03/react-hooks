import React, { useRef } from 'react'
export default () => {
  const inputEle = useRef(null)
  const onButtonClick = () => {
    console.log(inputEle)
    inputEle.current.focus()
  }
  const onHandleChange = () => {
    console.log(inputEle.current.value)
  }
  return (
    <div>
      <input ref={inputEle} type="text" onChange={onHandleChange} />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}