import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Navside from "./components/Navside";
import AOS from "aos";
import "aos/dist/aos.css";
import Skilinpo from "./components/Skilinpo";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-contant">
        <nav>
          <Header />
        </nav>

        <div className="sidenav">
          <Navside />
        </div>

        <div className="main">
          <Profile />
          <About />
          <Skilinpo />
          {/* <Experience/> */}
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
