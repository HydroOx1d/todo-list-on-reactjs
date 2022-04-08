import "./TodoMain.css";
import TodoAddContainer from "../../components/todo-add/TodoAddContainer";
import TodoTasksContainer from "../../components/todo-tasks/TodoTasksContainer";
import TodoHeaderContainer from "../todo-header/TodoHeaderContainer";

const TodoMain = (props) => {
  return (
    <div className="todo">
      <TodoHeaderContainer tasksLength={props.tasks} />

      <TodoAddContainer />

      <TodoTasksContainer tasks={props.tasks} />
    </div>
  );
};

export default TodoMain;
