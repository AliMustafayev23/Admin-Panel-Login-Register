import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
