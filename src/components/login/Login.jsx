import { auth } from '../../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Form, Field } from "react-final-form";
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/authReducer.';
import { Navigate } from 'react-router-dom';

const Login = (props) => {

  if(props.isAuth) {
    return <Navigate to="/"/>
  }

  return (
    <div className={"login"}>
      <div className="title login__title">
        <h2>Todo App</h2>
      </div>
      <Form
        onSubmit={(formObj) => {
          const { email, password } = formObj;
          signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            const { uid, email } = user;
            props.getAuthData(uid, email)
          })
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form login__form">
            <Field name="email">
              {({ input }) => (
                <div className="input login__form-input">
                  <input type="text" placeholder="Email" {...input} />
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input }) => (
                <div className="input login__form-input">
                  <input type="password" placeholder="Password" {...input} />
                </div>
              )}
            </Field>
            <button>Login</button>
          </form>
        )}
      </Form>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, { getAuthData })(Login);
