import React from "react";
import { connect } from "react-redux";
import { updateValue } from "../../redux/tasksReducer";
import TodoAdd from "./TodoAdd";



class TodoAddContainer extends React.Component {


  render() {
    return <TodoAdd {...this.props} />;
  }

};

const mapStateToProps = (state) => {
  return {
    inputValue: state.todo.addTaskInputValue,
    tasksLength: state.todo.tasks.length,
    uid: state.auth.uid
  };
}

export default connect(mapStateToProps, { updateValue })(
  TodoAddContainer
);