import React from "react";
import { connect } from "react-redux";
import TodoAdd from "./TodoAdd";
import { ref, set, push } from "firebase/database";
import { database } from "../../firebaseConfig";


const TodoAddContainer = (props) => {

  // const onAddTask = () => {
  //   let result = "";
  //   let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => el.toString());
  //   let str = "abcdefghijklmnopqrstuvwxyz".split('');

  //   for (let i = 0; i <= 10; i++) {
  //     let idx = Math.floor(Math.random() * str.length);
  //     let idx2 = Math.floor(Math.random() * num.length);
  //     result += str[idx] + num[idx2];
  //   }

  //   const tasksList = ref(database, props.uid + "/tasks");
  //   const newTask = push(tasksList);
  //   set(newTask, {
  //     id: result,
  //     title: props.inputValue ? props.inputValue : "Empty area",
  //   });
  // };

  return <TodoAdd {...props} />;
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.todo.addTaskInputValue,
    tasksLength: state.todo.tasks.length,
    uid: state.auth.uid,
  };
};

export default connect(mapStateToProps)(TodoAddContainer);
