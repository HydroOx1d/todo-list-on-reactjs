import './TodoAdd.css'
import { ref, set, push } from "firebase/database";
import { database } from "../../firebaseConfig";

const TodoAdd = (props) => {
  const onUpdateValue = (e) => {
    props.updateValue(e.target.value);
  };

  const onAddTask = () => {
    let result = "";
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => el.toString());
    let str = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    for (let i = 0; i <= 10; i++) {
      let idx = Math.floor(Math.random() * str.length);
      let idx2 = Math.floor(Math.random() * num.length);
      result += str[idx] + num[idx2];
    }

    const tasksList = ref(database, props.uid + "/tasks");
    const newTask = push(tasksList);
    set(newTask, {
      id: result,
      title: props.inputValue ? props.inputValue : "Empty area",
    });
  };

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

export default TodoAdd;
