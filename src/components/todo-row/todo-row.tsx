import { PropsWithChildren } from "react";
import { TodoRowType } from "./todo-row.types";

const TodoRow: React.FC<PropsWithChildren<TodoRowType>> = (
  props: PropsWithChildren<TodoRowType>
) => {
  const { leadingContent, children, trailingContent = null } = props;
  return (
    <div className="flex h-14">
      <div className="h-full w-12 flex justify-center items-center">
        {leadingContent}
      </div>
      <div className="h-full w-full flex items-center justify-start">
        {children}
      </div>
      {trailingContent != null && (
        <div className="h-full w-12 flex justify-center items-center">
          {trailingContent}
        </div>
      )}
    </div>
  );
};

export default TodoRow;
