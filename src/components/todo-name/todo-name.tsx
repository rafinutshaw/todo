import React from "react";
import { TodoItemType } from "../../app-contexts/todo-context.types";

const TodoName: React.FC<TodoItemType> = (props: TodoItemType) => {
  const { name, isComplete } = props;

  return (
    <div className={isComplete ? "line-through text-gray-200" : ""}>{name}</div>
  );
};

export default TodoName;
