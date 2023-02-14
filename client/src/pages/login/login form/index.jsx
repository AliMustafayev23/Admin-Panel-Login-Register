import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss";
const LoginSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const LoginForm = () => {
  return (
    <div id="loginForm">
      <div className="container">
        <div className="loginForm">
          <h1>Log in with your account</h1>
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
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

export default LoginForm;
