import React from "react";
import { connect } from "react-redux";
import TodoAdd from "./TodoAdd";
import {addTask} from '../../redux/tasksReducer'
import {useState} from 'react'


const TodoAddContainer = (props) => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onAddTask = (formObj) => {
    let result = "";
    let num = '0123456789'.split('');
    let str = "abcdefghijklmnopqrstuvwxyz".split('');

    for (let i = 0; i <= 10; i++) {
      let idx = Math.floor(Math.random() * str.length);
      let idx2 = Math.floor(Math.random() * num.length);
      result += str[idx] + num[idx2];
    }

    addTask(props.uid, {
      id: result,
      startDate: startDate.toLocaleString(),
      endDate: endDate.toLocaleString(),
      status: "In progress",
      ...formObj,
    });
  };

  return (
    <TodoAdd
      {...props}
      onAddTask={onAddTask}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
  };
};

export default connect(mapStateToProps)(TodoAddContainer);
