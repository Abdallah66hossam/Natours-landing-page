import About from "./components/about/About";
import Banner from "./components/header/Banner";
import "./app.scss";
import Fetures from "./components/fetures/Fetures";
import Tours from "./components/tours/Tours";
import Stories from "./components/stories/Stories";
import Contact from "./components/form/Contact";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <About />
      <Fetures />
      <Tours />
      <Stories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
