import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../../redux/slice/authSlice";
const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number().required("Required"),
});
const RegisterForm = () => {
  const passwordErr = () => toast.warning("Password should match");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gender = useRef();
  const [image, setImage] = useState();
  const imageValue = (file) => {
    setImage(file);
  };
  return (
    <div id="registerForm">
      <div className="container">
        <div className="registerForm">
          <h1>Register new account</h1>
          <Formik
            initialValues={{
              email: "",
              username: "",
              password: "",
              retypePassword: "",
              gender: "",
              age: "",
              image: "",
              type:"",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              values.gender = gender.current.value;
              values.image = image;
              values.type="student";
              console.log(values.image);
              console.log(values);
              if (values.password !== values.retypePassword) {
                passwordErr();
              }
              if (values.email && values.password) {
                dispatch(register({ values, navigate, toast }));
              }
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
                <Field name="username" />
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
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
                <Field name="age" type="number" />
                {errors.age && touched.age ? <div>{errors.age}</div> : null}
                <select name="gender" ref={gender}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                <input
                  type="file"
                  onChange={(e) => imageValue(e.target.files[0])}
                />
                <button className="login" type="submit">
                  Register
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
