import "./TodoHeader.css";
import { connect } from "react-redux";
import { logoutThunk } from "../../redux/authReducer.";
import TodoHeader from "./TodoHeader";

const TodoHeaderContainer = (props) => {
  const onLogout = () => {
    props.logoutThunk()
  }

  return <TodoHeader {...props} onLogout={onLogout} />;
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { logoutThunk })(TodoHeaderContainer);
