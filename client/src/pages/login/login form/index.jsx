import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slice/authSlice";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  return (
    <div id="loginForm">
      <div className="container">
        <div className="loginForm">
          <h1>Log in with your account</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              dispatch(login({ values, navigate, toast }));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label for="email">Email:</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
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
