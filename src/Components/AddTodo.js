import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Addtask } from '../redux/TodoSlices/TodoSlice';

function AddTodo() {
    const Dispatch = useDispatch ()
    const [task, settask] = useState({
        id : Math.random,
        title :"",
        description :"",
        isDone : false,
    });
  return (
    <div className='add-task'>
        <input type="text" placeholder='Enter task title' 
        onChange={(e) => {settask({...task, title: e.target.value});}}/>

        <input type="text" placeholder='Enter task title' 
        onChange={(e) => {settask({...task, description: e.target.value})}} />
        
        <button onClick={() => Dispatch(Addtask(task))}>Add New Task</button>
    </div>
  )
}

export default AddTodo