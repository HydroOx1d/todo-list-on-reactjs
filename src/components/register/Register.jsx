import { Form, Field } from "react-final-form";
import "./Register.css";
import Logo from "../../assets/text-editor.png";
import { emailValidation, minValue } from "../common/validate/validate";
import { NavLink } from "react-router-dom";



const Register = (props) => {
  return (
    <div className={"register"}>
      <div className="title register__title">
        <div className="logo register__logo">
          <img src={Logo} alt="notepad" />
        </div>
        <h2>Todo App</h2>
      </div>
      <Form onSubmit={(formObj) => props.registerSubmit(formObj)}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form register__form">
            <Field name="email" validate={emailValidation()}>
              {({ input, meta }) => (
                <div className="input register__form-input">
                  <input type="text" placeholder="Email" {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password" validate={minValue(6)}>
              {({ input, meta }) => (
                <div className="input register__form-input">
                  <input type="password" placeholder="Password" {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <button className="button register__button">Register</button>
          </form>
        )}
      </Form>
      <hr className="hr register__hr" />
      <div className="question register__question">
        <span>Do you have an account?</span> -{" "}
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Register;
