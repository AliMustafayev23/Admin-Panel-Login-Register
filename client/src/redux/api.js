import axios from "axios";

export const signIn = (values) =>
  axios.post("http://localhost:8000/students/signin", values);
export const signUp = (values) =>
  axios.post("http://localhost:8000/students/signup", values);
