import About from "./components/about/About";
import Banner from "./components/header/Banner";
import "./app.scss";
import Fetures from "./components/fetures/Fetures";

function App() {
  return (
    <div className="app">
      <Banner />
      <About />
      <Fetures />
    </div>
  );
}

export default App;
