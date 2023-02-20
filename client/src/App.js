import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Routing from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStudent } from "./redux/slice/authSlice";
function App() {
  const dispatch = useDispatch();
  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    dispatch(setStudent(student));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
