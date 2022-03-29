import React from 'react'
import { connect } from 'react-redux';
import { removeTask, getTasksData} from '../../redux/tasksReducer';
import TodoTasks from "./TodoTasks"


class TodoTasksContainer extends React.Component{
  componentDidMount() {
    this.props.getTasksData(this.props.uid);
  }
  render() {
    return <TodoTasks {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid
  }
}


export default connect(mapStateToProps, { removeTask, getTasksData })(
  TodoTasksContainer
);