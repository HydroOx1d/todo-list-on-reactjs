import { connect } from "react-redux";
import { getAuthData } from "../../redux/authReducer.";
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
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      const { uid, email } = user;
      props.getAuthData(uid, email);
    });
  }

  return <Login {...props} loginSubmit={loginSubmit}/>
}; 

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getAuthData })(LoginContainer);
