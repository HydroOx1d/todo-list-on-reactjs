import React from "react"
import TodoDetail from "./TodoDetail"
import {withRouter} from '../../hoc/withRouter'
import { connect } from "react-redux"
import {getDetailTask} from '../../redux/tasksReducer'


class TodoDetailContainer extends React.Component {

  componentDidMount() {
    let taskId = this.props.match.params.id
    this.props.getDetailTask(taskId);
  }


  render() {
    return <TodoDetail {...this.props} />
  }
}

let withRouters = withRouter(TodoDetailContainer); 

const mapStateToProps = (state) => {
  return {
    detailTask: state.todo.detailTask
  }
}

export default connect(mapStateToProps, {getDetailTask})(withRouters);