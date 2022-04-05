import { NavLink } from "react-router-dom";
import { database } from "../../firebaseConfig";
import {remove, ref} from 'firebase/database'

const TodoTasks = (props) => {
  return (
    <>
      {props.tasks.length === 0 ? (
        <h2 className="main-padding">Задачи отсутствуют</h2>
      ) : (
        <div className="todo-tasks main-padding">
          {props.tasks.map((task) => {
            return (
              <div className="todo-task" key={task.data.id}>
                <span className="todo-task__number">----------</span>
                <h4 className="todo-task__title"> <NavLink to={"/task/" + task.taskId}>{task.data.title}</NavLink> </h4>
                <span onClick={() => {
                  remove(ref(database, props.uid + "/tasks/" + task.taskId));
                }} className="todo-task__delete">Delete</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default TodoTasks