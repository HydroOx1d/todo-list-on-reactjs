import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTasksData } from "../../redux/tasksReducer";
import TodoTasks from "./TodoTasks";

const TodoTasksContainer = (props) => {
  useEffect(() => {
    props.getTasksData(props.uid);
  }, [props.tasksLength]);
  return <TodoTasks {...props} />;
};

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
    tasksLength: state.todo.tasks.length
  };
};

export default connect(mapStateToProps, { getTasksData })(TodoTasksContainer);
