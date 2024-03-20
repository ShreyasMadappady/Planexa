import About from "./components/About.jsx";
import AboutApp from "./components/AboutApp.jsx";
import AppFeatures from "./components/AppFeatures.jsx";
import CentreImage from "./components/CentreImage.jsx";
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
      <CentreImage
        text={
          "At Planexa, we believe in the transformative power of community engagement and the vital role of wellness in our lives."
        }
      />
      <About />
      <CentreImage
        text={
          "To transform communities into vibrant hubs of wellness and connection, where individuals thrive physically, mentally, and socially."
        }
      />
      <AboutApp />
      <AppFeatures />
      <Values />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
