import React from "react";
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let MyStyle = {
    minHeight:"50vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={MyStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0? "No Todos to Display !!":
      props.todos.map((todo) => {
        console.log(todo.sno);
        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      })
    }
    </div>
  )
};

export default Todos;
