import Register from "./Register";
import { connect } from "react-redux";
import { getAuthData, handleAuthErr, signUp } from "../../redux/authReducer.";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterContainer = (props) => {
  useEffect(() => {
    return () => {
      props.handleAuthErr(true, "");
    };
  }, []);

  if (props.isAuth) {
    return <Navigate to="/" />;
  }

  const registerSubmit = (formObj) => {
    const { email, password } = formObj;
    props.signUp(email, password)
  };

  return <Register {...props} registerSubmit={registerSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    authSuccess: state.auth.authSuccess,
    errMessage: state.auth.errMessage,
  };
};

export default connect(mapStateToProps, { getAuthData, handleAuthErr, signUp })(
  RegisterContainer
);
