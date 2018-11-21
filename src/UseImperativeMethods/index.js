import React, { useRef, useImperativeMethods, forwardRef } from 'react'
const FancyInput = (props, ref) => {
  const inputEle = useRef(null)
  useImperativeMethods(ref, () => ({
    focus: () => {
      inputEle.current.focus()
    }
  }))
  const onHandleChange = () => {
    console.log(inputEle.current.value)
  }
  return <input ref={inputEle} type="text" onChange={onHandleChange} />
}

export default forwardRef(FancyInput)