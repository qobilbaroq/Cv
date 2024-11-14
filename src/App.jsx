import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Navside from "./components/Navside";
import AOS from "aos";
import "aos/dist/aos.css";
import Skilinpo from "./components/Skilinpo";

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
          <Skilinpo/>
        </div>
      </div>
    </>
  );
}

export default App;
