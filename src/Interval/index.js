import React, { useState, useEffect } from 'react'
import { useDocumentTitle } from '../utils/index'

export default () => {
  useDocumentTitle('Interval')
  const [num, setCount] = useState(0)
  const [name, setName] = useState('undo')
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(num + 1)
    }, 1000)
    return () => {
      // console.log('timer', timer)
      clearInterval(timer)
    }
  }, [num])
  return (
    <div>
      <p>Interval Count: { num }</p>
      <p onClick={()=> {setName(name === 'undo' ? 'sqb' : 'undo')}}>Name: { name }</p>
    </div>
  )
}