import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer.";
import { auth } from "../../firebaseConfig";
import {signOut} from 'firebase/auth'

const TodoHeader = (props) => {
  let navigate = useNavigate()
  return (
    <div className="todo-header">
      <div className="tasks-counter">
        <span>Tasks count: {props.tasksLength.length}</span>
      </div>
      <div className="header-login">
        {props.email ? (
          <>
            <div>
              <span>{props.email}</span>
            </div>
            <div>
              <button onClick={() => {
                signOut(auth).then(() => {
                  props.logout()
                })
              }}>Logout</button>
            </div>
          </>
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

export default connect(mapStateToProps, { logout })(TodoHeader);