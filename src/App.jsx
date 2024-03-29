import React from 'react'
import ReactCounter from './ReactCounter'
import ReduxCounter from './ReduxCounter'
import TodoReact from './TodoReact'
import TodoRedux from './TodoRedux'


const App = () => {
  return (
    <div>
      <ReactCounter/>
      <hr />
      <ReduxCounter/> 
       <hr />
      <TodoReact/>
      <hr />
      <TodoRedux/>
    </div>
  )
}

export default App
