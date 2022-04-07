import { Form, Field } from "react-final-form";
import './Login.css'
import Logo from "../../assets/text-editor.png";
import {emailValidation, minValue} from '../common/validate/validate'
import { NavLink } from "react-router-dom";

const Login = (props) => {
  return (
    <div className={"login"}>
      <div className="title login__title">
        <div className="logo login__logo">
          <img src={Logo} alt="notepad" />
        </div>
        <h2>Todo App</h2>
      </div>
      <Form onSubmit={(formObj) => props.loginSubmit(formObj)}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form login__form">
            <Field name="email" validate={emailValidation()}>
              {({ input, meta }) => (
                <div className="input login__form-input">
                  <input type="text" placeholder="Email" {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password" validate={minValue(6)}>
              {({ input, meta }) => (
                <div className="input login__form-input">
                  <input type="password" placeholder="Password" {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {!props.authSuccess && (
              <div className="error login__error">
                <span>{props.errMessage}</span>
              </div>
            )}
            <button className="button login__button">Login</button>
          </form>
        )}
      </Form>
      <hr className="hr login__hr" />
      <div className="question login__question">
        <span>Do you don't have an account?</span> -{" "}
        <NavLink to="/register">Create account</NavLink>
      </div>
    </div>
  );
};

export default Login
