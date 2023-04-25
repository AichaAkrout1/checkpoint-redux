import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

function TodoList() {
    const todos = useSelector(state => state.Todo.TodoList)
    const [showdone, setshowdone] = useState(false)
  return (
    <div className='todo-list'>
        <AddTodo/>
        <button onClick={() => setshowdone(!showdone)} className='butt'>{showdone ? "show undone" : "show done"}</button>
      {todos.filter((Todo) => Todo.isDone === showdone).map((Todo) => (
        <TodoItem Todo={Todo}/>
      ))}
    </div>
  )
}

export default TodoList