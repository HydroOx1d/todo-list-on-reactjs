import Register from "./Register";
import {auth} from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { getAuthData } from "../../redux/authReducer.";
import { Navigate } from "react-router-dom";


const RegisterContainer = (props) => {
  if (props.isAuth) {
    return <Navigate to="/" />;
  }

  const registerSubmit = (formObj) => {
    const {email, password} = formObj
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
      const user = userCredential.user
      const { uid, email } = user;
      props.getAuthData(uid, email);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return <Register {...props} registerSubmit={registerSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getAuthData })(RegisterContainer);
