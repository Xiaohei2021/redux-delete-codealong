import React from 'react';

const Todo = (props) => {
  return (
    <li>
      <span>{props.text}</span>
    <button onClick={()=>props.delete(props.todo.id)}> Delete </button>
    </li>
  );
};

export default Todo;