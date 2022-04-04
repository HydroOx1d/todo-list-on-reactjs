import React, { useEffect } from "react";
import TodoMain from "./TodoMain";
import { connect } from "react-redux";
// import {requireAuth} from '../../hoc/requireAuth'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { getAuthData } from "../../redux/authReducer.";
import { Navigate } from "react-router-dom";

const TodoMainContainer = (props) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        props.getAuthData(uid, email);
      }
    });
  }, [])

  if (!props.isAuth) return <Navigate to="/login" />;
  return <TodoMain {...props} />;
};

const mapStateToProps = (state) => {
  return {
    tasks: state.todo.tasks,
    isAuth: state.auth.isAuth,
  };
};

// const withAuth = requireAuth(TodoMainContainer);

export default connect(mapStateToProps, { getAuthData })(TodoMainContainer);
