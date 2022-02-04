import React from "react";

function TodoList({todoList, setTodoList, setInputTodo, 
  setIseditabe, setEditableTodo}) {
    //delete button functionality
    function deleteTodo(id) {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    }
  
    //edit button functionality
    function editTodo(id) {
      const editingTodo = todoList.find((todo) => todo.id === id);
      setInputTodo(editingTodo.title);
      setIseditabe(true);
      setEditableTodo(editingTodo);
    }


  return (
    <div>
      <div className="todo-list">
        <table>
          <thead>
            <tr>
              <td>Sr.No.</td>
              <td>Todo Title</td>
              <td>Action buttons</td>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <button className="edit" onClick={() => editTodo(item.id)}>Edit</button>
                    <button className="delete" onClick={() => deleteTodo(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
