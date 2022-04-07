import { connect } from "react-redux";
import { getAuthData, handleAuthErr } from "../../redux/authReducer.";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from "./Login";

const LoginContainer = (props) => {
  if (props.isAuth) {
    return <Navigate to="/" />;
  }

  const loginSubmit = (formObj) => {
    const { email, password } = formObj;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid, email } = user;
        props.getAuthData(uid, email);
        props.handleAuthErr(true, '');
      })
      .catch(err => {
        if(err.message === 'Firebase: Error (auth/user-not-found).') {
          props.handleAuthErr(false, "Incorrect email");
        } else {
          if(err.message === 'Firebase: Error (auth/wrong-password).') {
            props.handleAuthErr(false, "Incorrect email or password");
          }
        }
      })
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

export default connect(mapStateToProps, { getAuthData, handleAuthErr })(
  LoginContainer
);
