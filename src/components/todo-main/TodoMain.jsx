import "./TodoMain.css";
import TodoAddContainer from "../../components/todo-add/TodoAddContainer";
import TodoHeader from "../../components/todo-header/TodoHeader";
import TodoTasksContainer from "../../components/todo-tasks/TodoTasksContainer";

const TodoMain = (props) => {
  return (
    <div className="todo">
      <TodoHeader tasksLength={props.tasks} />

      <TodoAddContainer />

      <TodoTasksContainer tasks={props.tasks} />
    </div>
  );
};

export default TodoMain;
