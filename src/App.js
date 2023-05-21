import logo from "./logo.svg";
import "./App.css";
import Navbar from "./compoent/Navbar";
import Skills from "./compoent/Skills";
import Portfolio from "./compoent/Portfolio";
import Bio from "./compoent/Bio";
import Footer from "./compoent/Footer";
import Services from "./compoent/Services";
import Home from "./compoent/Home";

import { useMediaQuery } from "react-responsive";

function App() {
  /* --- Function to Open/Close Mobile Nav --- */
  function sideNavAction() {
    let sidenav = document.getElementById("sideNavBar");
    if (sidenav.classList.contains("sidenav-mobile-visible")) {
      sidenav.classList.remove("sidenav-mobile-visible");
    } else {
      sidenav.classList.add("sidenav-mobile-visible");
    }
  }

  //for responsive design
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <>
      {isMobileDevice && <mobile />}
      {isTabletDevice && <tablet-mobile />}
      {isDesktop && <desktop />}
      {isLaptop && <laptop />}
      {isBigScreen && <big-screen />}

      <Navbar />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Bio />
      <Footer />
    </>
  );
}

export default App;
