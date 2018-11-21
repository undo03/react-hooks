import React from 'react'
import DeepChild from './DeepChild'
export const Context = React.createContext(null)
const someVal = { a: 'Context-a', b: 'Context-b' }
export default () => {

  return (
    <Context.Provider value={someVal}>
      <DeepChild></DeepChild>
    </Context.Provider>
  )
}