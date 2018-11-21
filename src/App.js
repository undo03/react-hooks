import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useWindowSize } from './utils'

import Counter from './Counter/index'
import Interval from './Interval'
import Context from './Context/index'
import Todos from './Todos'
import UseCallback from './UseCallback'
import UseRef from './UseRef'
import UseImperativeMethods from './UseImperativeMethods'
export default () => {
  const [show, setShow] = useState(true)
  const windowSize = useWindowSize()
  const fancyInputRef = useRef()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org/docs/hooks-reference.html" target="_blank" rel="noopener noreferrer"> Learn React Hooks</a>
        <p>页面高度： { windowSize.innerHeight }</p>
        <p onClick={() => { setShow(!show) }}>{ show ? 'hide' : 'show' }Interval组件</p>
        { show ? <Interval></Interval> : null }
        <Counter initialCount={10}></Counter>
        <Context></Context>
        <Todos></Todos>
        <UseCallback></UseCallback>
        <UseRef></UseRef>
        <div>
          <UseImperativeMethods ref={fancyInputRef}></UseImperativeMethods>
          <button onClick={() => {fancyInputRef.current.focus()}}>Focus child input</button>
        </div>
        
      </header>
    </div>
  )
}
