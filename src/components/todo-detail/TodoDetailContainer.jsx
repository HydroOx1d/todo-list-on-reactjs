import React, { useEffect } from "react";
import TodoDetail from "./TodoDetail";
import { connect } from "react-redux";
import { getDetailTask } from "../../redux/tasksReducer";
import { useParams } from "react-router-dom";
import { getAuthDataThunk } from "../../redux/authReducer.";
import { getDetailTaskThunk } from "../../redux/tasksReducer";

const TodoDetailContainer = (props) => {
  let { id: taskId } = useParams();
  useEffect(() => {
    props.getAuthDataThunk();
  }, []);

  useEffect(() => {
    props.getDetailTaskThunk(props.uid, taskId);
  }, [props.isAuth]);

  return <TodoDetail {...props} />;
};

const mapStateToProps = (state) => {
  return {
    detailTask: state.todo.detailTask,
    uid: state.auth.uid,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  getDetailTask,
  getAuthDataThunk,
  getDetailTaskThunk,
})(TodoDetailContainer);
