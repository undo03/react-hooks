import { useReducer } from 'react'
const initState = {
  name: 'undo',
  list: []
}

const reducer = (state, action) => {
  const { type } = action
  switch(type) {
    case 'change_name':
      return Object.assign({}, state, {name: action.name})
    case 'add':
      return Object.assign({}, state, {list: [...state.list, action.data]})
    default:
      return state
  }
}

export default () => useReducer(reducer, initState, {type: 'add', data: 3})