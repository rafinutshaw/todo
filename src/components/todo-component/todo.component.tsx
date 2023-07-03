import React, { useContext } from "react";
import { TodoContext } from "../../app-contexts/todo-context";
import ArrowDown from "../../icons/arrow-down.icon";
import CheckIcon from "../../icons/check.icon";
import "./todo.component.styles.css";
import TodoAdd from "../todo-add/todo-add";
import TodoFooter from "../todo-footer";
import TodoName from "../todo-name/todo-name";
import TodoRemove from "../todo-remove/todo-remove";
import TodoRow from "../todo-row/todo-row";

const TodoComponent: React.FC = () => {
  const { getTodoItems, markAllComplete, updateStatus } =
    useContext(TodoContext);

  return (
    <div className=" w-116 drop-shadow">
      <div className="w-full border bg-white text-xl">
        <div className="shadow-md">
          <TodoRow
            leadingContent={
              <button
                className="text-gray-200 bold"
                onClick={() => markAllComplete()}
              >
                <ArrowDown />
              </button>
            }
          >
            <TodoAdd />
          </TodoRow>
        </div>
        <div className="h-42 overflow-auto">
          {getTodoItems().map((item) => (
            <div className="shadow">
              <TodoRow
                key={item.id}
                leadingContent={
                  <label htmlFor={item.id.toString()} className="todo-checkbox">
                    <input
                      type="checkbox"
                      id={item.id.toString()}
                      checked={item.isComplete}
                      onChange={() => updateStatus(item.id, !item.isComplete)}
                    />
                    <div className="bg-red h-6 w-6 flex justify-center items-center">
                      <div className="check text-green-200">
                        <CheckIcon />
                      </div>
                    </div>
                  </label>
                }
                trailingContent={<TodoRemove id={item.id} />}
              >
                <TodoName {...item} />
              </TodoRow>
            </div>
          ))}
        </div>
        <div className="border">
          <TodoFooter />
        </div>
      </div>
      <div className="w-116 items-center flex flex-col">
        <div style={{ width: "98%" }} className=" border h-1 bg-white" />
        <div style={{ width: "96%" }} className="border h-1 bg-white" />
      </div>
    </div>
  );
};

export default TodoComponent;
