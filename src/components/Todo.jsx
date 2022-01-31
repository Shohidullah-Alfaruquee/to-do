import React, {useState} from 'react';
import AddTodoList from './AddTodoList';

export default function Todo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoItem, setTodoItem] = useState([])

  function changeTodoTitle(inputValue){
    setTodoTitle(inputValue)
  }

  function addTodo(val){
    setTodoItem([{todo:val, id:Date.now()},...todoItem])
  }
  function updateTodo(val){
    //   const updatedList = []
    //   setTodoItem(updatedList)
    console.log(val);
  }
  
  return (
  <div className='todoApp'>
      <div className='form'>
        <input type="text" placeholder="Please write to do title here" 
        onChange={(e)=>changeTodoTitle(e.target.value)} value={todoTitle} name='toDo'></input>
        <button type='submit' onClick={(e)=>{
            e.preventDefault();
            addTodo(todoTitle);
            setTodoTitle("")
        }}>Add ToDo</button>
        <button onClick={(e)=>{
            e.preventDefault()
            updateTodo(todoTitle)
        }}>Update Todo</button>
      </div>
      <br></br>
      <h2>Todo List</h2>
      <AddTodoList items={todoItem} setTodoItem={setTodoItem} setTodoTitle={setTodoTitle}/>
  </div>);
}
