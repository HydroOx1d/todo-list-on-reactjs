import { NavLink } from "react-router-dom";

const TodoTasks = (props) => {
  return (
    <>
      {props.tasks.length === 0 ? (
        <h2 className="main-padding">Задачи отсутствуют</h2>
      ) : (
        <div className="todo-tasks main-padding">
          {props.tasks.map((task) => {
            return (
              <div className="todo-task" key={task.id}>
                <span className="todo-task__number">{task.id}</span>
                <h4 className="todo-task__title"> <NavLink to={"/task/" + task.id}>{task.title}</NavLink> </h4>
                <span onClick={() => props.removeTask(task.id)} className="todo-task__delete">Delete</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default TodoTasks