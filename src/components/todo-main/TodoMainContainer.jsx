import React, { useEffect } from "react";
import TodoMain from "./TodoMain";
import { connect } from "react-redux";
import { getAuthDataThunk, initialAppThunk } from "../../redux/authReducer.";
import { Navigate } from "react-router-dom";
import { MainPreloader } from "../common/loader/MainPreloader";

const TodoMainContainer = (props) => {
  useEffect(() => {
    props.getAuthDataThunk();
  }, [props.isAuth])

  useEffect(() => {
    props.initialAppThunk()
  }, [])
  
  if (!props.initialApp) {
    return <MainPreloader />;
  }

  if(!props.isAuth) return <Navigate to="/login"/>


  return <TodoMain {...props} />;
};

const mapStateToProps = (state) => {
  return {
    tasks: state.todo.tasks,
    isAuth: state.auth.isAuth,

    initialApp: state.auth.initialApp
  };
};


export default connect(mapStateToProps, { getAuthDataThunk, initialAppThunk })(
  TodoMainContainer
);
