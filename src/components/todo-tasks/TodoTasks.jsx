import "./TodoTasks.css";
import { NavLink } from "react-router-dom";



const TodoTasks = (props) => {
  return (
    <>
      <div className="main-padding todo-tasks">
        <table className="table todo-tasks__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!props.tasks.length ? (
              <tr>
                <td style={{ position: "absolute" }}>There are no tasks</td>
              </tr>
            ) : (
              props.tasks.map((task) => (
                <tr key={task.data.id}>
                  <td>#</td>
                  <td
                    style={{
                      width: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {task.data.title.length > 10
                      ? task.data.title.split("").slice(0, 20).join("") + "..."
                      : task.data.title}
                  </td>
                  <td>{task.data.startDate}</td>
                  <td>{task.data.endDate}</td>
                  <td>{task.data.status}</td>
                  <td className="todo-task__link">
                    <NavLink to={'/task/' + task.taskId}>Show more</NavLink>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          {/* //   <div className="todo-task" key={task.data.id}>
                //     <span className="todo-task__number">----------</span>
                // <h4 className="todo-task__title">
                //   {" "}
                //   <NavLink to={"/task/" + task.taskId}>
                //     {task.data.title}
                //   </NavLink>{" "}
                // </h4>
                // <span
                //   onClick={() => {}}
                //   className="todo-task__delete"
                // >
                //   Delete
                // </span>

                //   </div> */}
        </table>
      </div>
    </>
  );
};

export default TodoTasks;
