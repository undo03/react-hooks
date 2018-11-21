import React, { useContext } from 'react'
import { Context } from './index'

export default () => {
  const aa = useContext(Context)
  console.log(aa) // { a: 'Context-a', b: 'Context-b' }
  return (
    <div>{aa.a}</div>
  )
}