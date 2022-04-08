import "./TodoHeader.css";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer.";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import TodoHeader from "./TodoHeader";

const TodoHeaderContainer = (props) => {
  const onLogout = () => {
    signOut(auth).then(() => {
      props.logout();
    });
  }

  return <TodoHeader {...props} onLogout={onLogout} />;
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { logout })(TodoHeaderContainer);
