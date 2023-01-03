import About from "./components/about/About";
import Banner from "./components/header/Banner";
import "./app.scss";
import Fetures from "./components/fetures/Fetures";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <div className="app">
      <Banner />
      <About />
      <Fetures />
      <Tours />
    </div>
  );
}

export default App;
