import About from "./components/about/About";
import Banner from "./components/header/Banner";
import "./app.scss";
import Fetures from "./components/fetures/Fetures";
import Tours from "./components/tours/Tours";
import Stories from "./components/stories/Stories";
import Contact from "./components/form/Contact";

function App() {
  return (
    <div className="app">
      <Banner />
      <About />
      <Fetures />
      <Tours />
      <Stories />
      <Contact />
    </div>
  );
}

export default App;
