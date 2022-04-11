import { connect } from "react-redux";
import { getAuthData, handleAuthErr, signIn } from "../../redux/authReducer.";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";

const LoginContainer = (props) => {
  useEffect(() => {
    return () => {
      props.handleAuthErr(true, "");
    };
  }, []);

  if (props.isAuth) {
    return <Navigate to="/" />;
  }

  const loginSubmit = (formObj) => {
    const { email, password } = formObj;
    props.signIn(email, password)
    
  };

  return <Login {...props} loginSubmit={loginSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    authSuccess: state.auth.authSuccess,
    errMessage: state.auth.errMessage,
  };
};

export default connect(mapStateToProps, { getAuthData, handleAuthErr, signIn })(
  LoginContainer
);
