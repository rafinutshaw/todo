import React, { useContext } from "react";
import { TodoContext } from "../app-contexts/todo-context";
import FooterFilter from "./footer-filter/footer-filter";

const TodoFooter: React.FC = () => {
  const { getActiveItemsCount, clearCompletedTodo } = useContext(TodoContext);

  return (
    <div className="flex justify-between py-2 text-sm mx-3 text-black-300">
      <div>{getActiveItemsCount()} items left</div>
      <FooterFilter />
      <button type="button" onClick={clearCompletedTodo}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;
