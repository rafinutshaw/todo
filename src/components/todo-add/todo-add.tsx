import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../../app-contexts/todo-context";
import "./todo-add.styles.css";

const TodoAdd: React.FC = () => {
  const { addTodoList } = useContext(TodoContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (val: any): void => {
    addTodoList(val.name);
    reset();
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: true })}
        className="w-full form-field"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoAdd;
