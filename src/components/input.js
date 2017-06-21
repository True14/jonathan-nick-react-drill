import React from 'react';



export default function Input(props) {
  return (
    <form onSubmit={e => props.onSubmit(e)}>
      <label htmlFor="add">Add</label>&emsp;
      <input type="text" value={props.value} id="add" name="add" placeholder="Add words here"
          onChange={e => props.onChange(e.target.value)}/>
    </form>
  );
}
