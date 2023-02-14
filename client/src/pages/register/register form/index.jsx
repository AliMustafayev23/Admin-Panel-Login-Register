import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss";
const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const RegisterForm = () => {
  return (
    <div id="registerForm">
      <div className="container">
        <div className="registerForm">
          <h1>Register new account</h1>
          <Formik
            initialValues={{
              email: "",
              userName: "",
              password: "",
              retypePassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label for="email">Email:</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <label for="username">Username:</label>
                <Field name="userName" />
                {errors.userName && touched.userName ? (
                  <div>{errors.userName}</div>
                ) : null}
                <label for="password">Password:</label>
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <label for="retypePassword">Re-type Password:</label>
                <Field name="retypePassword" type="password" />
                {errors.retypePassword && touched.retypePassword ? (
                  <div>{errors.retypePassword}</div>
                ) : null}
                <button className="login" type="submit">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
