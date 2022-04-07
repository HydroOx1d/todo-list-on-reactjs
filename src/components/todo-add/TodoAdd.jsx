import './TodoAdd.css'
import { Form, Field } from 'react-final-form';

const TodoAdd = (props) => {


  // const onAddTask = () => {
  //   props.onAddTask()
  // };

  return (
    <div className="todo-add main-padding">
      <div className="todo-input">
        <input
          type="text"
          placeholder="Name of task"
        />
      </div>
      <div className="todo-btn">
        <button>Add</button>
      </div>
    </div>
  );
};

export default TodoAdd;
