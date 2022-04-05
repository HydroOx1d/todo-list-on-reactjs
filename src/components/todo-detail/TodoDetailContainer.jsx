import React, { useEffect } from "react";
import TodoDetail from "./TodoDetail";
import { connect } from "react-redux";
import { getDetailTask } from "../../redux/tasksReducer";
import { useParams } from "react-router-dom";
import { database } from "../../firebaseConfig";
import { get, ref } from "firebase/database";
import { getAuthDataThunk } from "../../redux/authReducer.";

const TodoDetailContainer = (props) => {
  let { id: taskId } = useParams();
  useEffect(() => {
    props.getAuthDataThunk()
  }, []);

  useEffect(() => {
    get(ref(database, props.uid + "/tasks/" + taskId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          props.getDetailTask(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ props.isAuth]);

  return <TodoDetail {...props} />;
};

const mapStateToProps = (state) => {
  return {
    detailTask: state.todo.detailTask,
    uid: state.auth.uid,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { getDetailTask, getAuthDataThunk })(
  TodoDetailContainer
);
