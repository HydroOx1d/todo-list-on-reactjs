

const TodoHeader = (props) => {
  return (
    <div className="todo-header">
      <div className="tasks-counter">
        <span>Tasks count: {props.tasksLength.length}</span>
      </div>
    </div>
  );
}

export default TodoHeader