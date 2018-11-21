import React, { useCallback, useState, useEffect } from 'react'

export default ({initialCount = 0}) => {
  const [count, setCount] = useState(initialCount)
  const memoizedCallback = useCallback(
    () => {
      console.log('useCallback', count)
      return count % 3 === 0 ? true : false
    },
    [count],
  )
  
  console.log(memoizedCallback())
  return (
    <div>
      <p>Count: { count }</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  )
}