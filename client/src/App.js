import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStudent } from "./redux/slice/authSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";
function App() {
  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    dispatch(setStudent(student));
  }, []);
  const router = createBrowserRouter(ROUTES);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
