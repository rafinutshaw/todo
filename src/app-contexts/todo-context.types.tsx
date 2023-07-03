export type TodoContextType = {
  getTodoItems: () => TodoItemType[];
  addTodoList: (name: string) => TodoItemType[];
  clearCompletedTodo: () => TodoItemType[];
  removeFromTodoList: (id: number) => TodoItemType[];
  activeFilter: ActiveFilters;
  updateActiveFilter: (filter: ActiveFilters) => string;
  updateStatus: (id: number, markComplete: boolean) => void;
  getActiveItemsCount: () => number;
  markAllComplete: () => void;
};

export type TodoItemType = {
  name: string;
  isComplete: boolean;
  id: number;
};

export type ActiveFilters = "active" | "complete" | "all";
