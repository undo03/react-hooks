import React from 'react'
import todoReducer from './reducer'
export default () => {
  const [state, dispatch] = todoReducer()
  const {name, list} = state
  return (
    <div>
      {
        list && list.length > 0 && list.map((item, index) => (
          <p key={index}>待办事项 {item}</p>
        ))
      }
      <p>{name}</p>
      <button onClick={() => {
        dispatch({type: 'add', data: list.length + 1})
      }}>
        Add todo
      </button>
      <button onClick={() => {
        dispatch({type: 'change_name', name: name === 'songqibin' ? 'undo' : 'songqibin'})
      }}>
        Change name
      </button>
    </div>
  )
}