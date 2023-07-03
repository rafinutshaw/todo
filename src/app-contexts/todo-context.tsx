import React, { PropsWithChildren, createContext, useState } from "react";
import {
  ActiveFilters,
  TodoContextType,
  TodoItemType,
} from "./todo-context.types";

export const TodoContext = createContext<TodoContextType>({
  getTodoItems: () => [],
  addTodoList: (name: string) => [],
  clearCompletedTodo: () => [],
  removeFromTodoList: (id: number) => [],
  activeFilter: "all",
  updateActiveFilter: (filter: ActiveFilters) => "all",
  updateStatus: () => {},
  getActiveItemsCount: () => 0,
  markAllComplete: () => {},
});

export const TodoProvider: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [nextId, setNextId] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<ActiveFilters>("all");

  const addTodoList = (name: string): TodoItemType[] => {
    const item: TodoItemType = { name: name, id: nextId, isComplete: false };
    setTodoList([...todoList, item]);
    setNextId(nextId + 1);
    return [...todoList, item];
  };

  const removeFromTodoList = (id: number): TodoItemType[] => {
    const newList = [...todoList];
    const index = newList.findIndex((item) => item.id === id);
    if (index >= 0) {
      newList.splice(index, 1);
      setTodoList(newList);
      return newList;
    }
    return todoList;
  };

  const clearCompletedTodo = (): TodoItemType[] => {
    const newList = todoList.filter((item) => !item.isComplete);
    setTodoList(newList);
    return newList;
  };

  const updateActiveFilter = (filter: ActiveFilters): string => {
    setActiveFilter(filter);
    return filter;
  };

  const getTodoItems = (): TodoItemType[] => {
    if (activeFilter === "active")
      return todoList.filter((item) => !item.isComplete);
    if (activeFilter === "complete")
      return todoList.filter((item) => item.isComplete);
    return todoList;
  };

  const updateStatus = (id: number, markComplete: boolean): void => {
    const newList = [...todoList];
    const index = todoList.findIndex((item) => item.id === id);
    if (index >= 0) {
      newList[index].isComplete = markComplete;
    }
    setTodoList(newList);
  };

  const markAllComplete = (): void => {
    const newList = todoList.map((item) => {
      item.isComplete = true;
      return item;
    });
    setTodoList(newList);
  };

  const getActiveItemsCount = (): number =>
    todoList.filter((item) => !item.isComplete).length;

  return (
    <TodoContext.Provider
      value={{
        getTodoItems,
        addTodoList,
        clearCompletedTodo,
        removeFromTodoList,
        activeFilter,
        updateActiveFilter,
        updateStatus,
        getActiveItemsCount,
        markAllComplete,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
