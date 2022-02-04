import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditabe, setIseditabe] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  return (
    <div className="todo">
      <h1>Todo App</h1>
      <div className="todo-app">
        <Form
          inputTodo={inputTodo}
          todoList={todoList}
          setTodoList={setTodoList}
          setInputTodo={setInputTodo}
          isEditabe={isEditabe}
          setIseditabe={setIseditabe}
          editableTodo={editableTodo}
          setEditableTodo={setEditableTodo}
        />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          setInputTodo={setInputTodo}
          setIseditabe={setIseditabe}
          setEditableTodo={setEditableTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
