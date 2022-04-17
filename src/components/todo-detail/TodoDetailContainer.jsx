import React, { useEffect } from "react";
import TodoDetail from "./TodoDetail";
import { database } from "../../firebaseConfig";
import {remove, ref, update} from 'firebase/database'
import { connect } from "react-redux";
import { getDetailTask } from "../../redux/tasksReducer";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthDataThunk } from "../../redux/authReducer.";
import { getDetailTaskThunk } from "../../redux/tasksReducer";

const TodoDetailContainer = (props) => {
  let { id: taskId } = useParams();
  let navigate = useNavigate()
  useEffect(() => {
    props.getAuthDataThunk();
  }, []);

  useEffect(() => {
    props.getDetailTaskThunk(props.uid, taskId);
  }, [props.isAuth, props.detailTask]);

  const onRemoveTask = () => {
    remove(ref(database, 'users/' + props.uid + "/tasks/" + taskId));
    navigate('/')
  }

  const completeTask = () => {
    const taskData = {
      status: "Completed",
      description: props.detailTask.description,
      endDate: props.detailTask.endDate,
      id: props.detailTask.id,
      startDate: props.detailTask.startDate,
      title: props.detailTask.title,
    };
    const updates = {}
    updates['users/' + props.uid + '/tasks/' + taskId] = taskData
    return update(ref(database), updates)
  }

  return (
    <TodoDetail
      {...props}
      onRemoveTask={onRemoveTask}
      completeTask={completeTask}
    />
  );
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
