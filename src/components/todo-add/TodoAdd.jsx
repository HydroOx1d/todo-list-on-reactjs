const TodoAdd = (props) => {

  const onUpdateValue = (e) => {
    props.updateValue(e.target.value)
  }

  const onAddTask = () => {
    props.addTask({
      id: props.tasksLength + 1,
      title: props.inputValue ? props.inputValue : 'Empty area',
    });
  } 

  return (
    <div className="todo-add main-padding">
      <div className="todo-input">
        <input
          type="text"
          placeholder="Name of task"
          value={props.inputValue}
          onChange={onUpdateValue}
        />
      </div>
      <div className="todo-btn">
        <button onClick={onAddTask}>Add</button>
      </div>
    </div>
  );
};

export default TodoAdd