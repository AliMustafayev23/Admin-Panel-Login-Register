import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Routing from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
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
