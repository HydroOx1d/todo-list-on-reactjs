import Register from "./Register";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { getAuthData, handleAuthErr } from "../../redux/authReducer.";
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid, email } = user;
        props.getAuthData(uid, email);
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          props.handleAuthErr(false, "This email is already registered");
        }
      });
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

export default connect(mapStateToProps, { getAuthData, handleAuthErr })(
  RegisterContainer
);
