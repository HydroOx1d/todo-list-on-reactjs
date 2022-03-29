import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


const TodoHeader = (props) => {
  return (
    <div className="todo-header">
      <div className="tasks-counter">
        <span>Tasks count: {props.tasksLength.length}</span>
      </div>
      <div className="header-login">
        {props.email ? (
          props.email
        ) : (
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps)(TodoHeader);