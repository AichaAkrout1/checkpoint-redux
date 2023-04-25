import React from 'react'
import { useDispatch } from 'react-redux';
import { Donetask, Removetask } from '../redux/TodoSlices/TodoSlice';
import EditTask from './EditTask';

function TodoItem({Todo}) {
    const dispatch = useDispatch()
  return (
    <div className= {`todo-item ${Todo.isDone ? "done" : "undone"} `}>
        <div className='text'>
    <h2>{Todo.title}</h2>
    <p>{Todo.description}</p>
    </div>
    <span  onClick={() => dispatch(Donetask({id : Todo.id}))}>{Todo.isDone? "Done":"Not Done"}</span>
    <EditTask id ={Todo.id}/>
    <button onClick={() => dispatch(Removetask({id : Todo.id}))}>remove</button>
  </div>
  )
}

export default TodoItem;