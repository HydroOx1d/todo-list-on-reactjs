import React from 'react'
import { connect } from 'react-redux';
import { removeTask } from '../../redux/tasksReducer';
import TodoTasks from "./TodoTasks"


class TodoTasksContainer extends React.Component{
  render() {
    return <TodoTasks {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { removeTask })(TodoTasksContainer);