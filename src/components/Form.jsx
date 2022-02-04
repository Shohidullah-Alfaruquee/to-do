import React from "react";

function Form({inputTodo, todoList, setTodoList, setInputTodo, isEditabe, setIseditabe, editableTodo, setEditableTodo }) {


      //add button functionality
  function addtoList(e, inputTodo){
    e.preventDefault();
    if(inputTodo){
      const newTodo = {
        id: Date.now(),
        title: inputTodo
      }
      setTodoList([newTodo, ...todoList]);
      setInputTodo("")
    }else{
      alert("Please provide a todo.")
    }
  }

    //update button functionality

    function updateList(e,todo){
        e.preventDefault();
        if(todo){
          editableTodo.title = todo|| editableTodo.title;
          setInputTodo("")
          setIseditabe(false)
          setEditableTodo(null)
        }else{
            alert("Please provide a todo.")
          }
      }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Please write your todos"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />

        <button
          onClick={(e) =>
            isEditabe ? updateList(e, inputTodo) : addtoList(e, inputTodo)
          }
        >
          {isEditabe ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default Form;
