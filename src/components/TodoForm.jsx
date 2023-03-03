import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please Enter Your Task....."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="btn"> {editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
