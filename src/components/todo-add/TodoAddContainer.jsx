import React from "react";
import { connect } from "react-redux";
import TodoAdd from "./TodoAdd";
import {addTask} from '../../redux/tasksReducer'
import {dateAndTime} from '../common/dateformat/dateFormat'


const TodoAddContainer = (props) => {

  const onAddTask = (formObj) => {
    let result = "";
    let num = '0123456789'.split('');
    let str = "abcdefghijklmnopqrstuvwxyz".split('');

    for (let i = 0; i <= 10; i++) {
      let idx = Math.floor(Math.random() * str.length);
      let idx2 = Math.floor(Math.random() * num.length);
      result += str[idx] + num[idx2];
    }

    props.addTask(props.uid,{
      id: result,
      date: dateAndTime("date"),
      time: dateAndTime("time"),
      status: "In progress",
      ...formObj,
    });
  };

  return <TodoAdd {...props} onAddTask={onAddTask}/>;
};

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
  };
};

export default connect(mapStateToProps, {addTask})(TodoAddContainer);
