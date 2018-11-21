import React, { useState } from 'react'

const initialState = {
  name: 'undo',
  age: 26
}

export default ({initialCount = 0}) => {
  const [count, setCount] = useState(initialCount)
  const [option, setOption] = useState(initialState)
  return (
    <div>
      <p>Name: { option.name } Age: {option.age} Count: { count }</p>
      <button onClick={() => setOption(preState => {
        return {...preState, ...{name: 'sqb'}}
      })}>setName</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  )
}