import React, { useContext } from "react";
import { TodoContext } from "../../app-contexts/todo-context";
import CloseIcon from "../../icons/close.icon";
import { TodoRemoveType } from "./todo-remove.types";

const TodoRemove: React.FC<TodoRemoveType> = (props: TodoRemoveType) => {
  const { id } = props;
  const { removeFromTodoList } = useContext(TodoContext);

  return (
    <button className="text-maroon-300" onClick={() => removeFromTodoList(id)}>
      <CloseIcon />
    </button>
  );
};

export default TodoRemove;
