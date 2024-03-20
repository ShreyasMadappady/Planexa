import About from "./components/About.jsx";
import AboutApp from "./components/AboutApp.jsx";
import AppFeatures from "./components/AppFeatures.jsx";
import AppendDots from "./components/AppendDots.jsx";
import CentreImage from "./components/CentreImage.jsx";
import CentreImage2 from "./components/CentreImage2.jsx";
import ComInfo from "./components/ComInfo.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import Navbar from "./components/Navbar.jsx";
import Values from "./components/Values.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <ComInfo />
      <CentreImage />
      <About />
      <CentreImage2 />
      <AboutApp />
      <AppFeatures />
      <Values />
      <ContactUs />
      <Footer />
      <AppendDots />
    </div>
  );
}

export default App;
