import React from 'react';

export default function AddTodoList({items, setTodoTitle, setTodoItem}) {
    const deleteItemFromList = (key) =>{
        const newList = items.filter((item)=>{
            return(item.id !==key)
        })
        setTodoItem(newList);
    }

    // const editList = (key) => {
    //     setTodoTitle(key);
    // }
  return (
  <table className='todo-list'>
      <thead>
          <tr>
              <td>Sr. No.</td>
              <td>Todo</td>
              <td>Action</td>
          </tr>
      </thead>
      <tbody>
          {items.map((item, index)=>{
              
              return(
                <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.todo}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={()=>{
                            deleteItemFromList(item.id)
                        }}>Delete</button>
                    </td>
                </tr>
              )
          })}
      </tbody>
  </table>);
}
