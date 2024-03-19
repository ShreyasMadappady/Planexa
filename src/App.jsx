import About from "./components/About.jsx";
import Carousel from "./components/Carousel.jsx";
import CentreImage from "./components/CentreImage.jsx";
import ComInfo from "./components/ComInfo.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ComInfo />
      <CentreImage text={"At Planexa, we believe in the transformative power of community engagement and the vital role of wellness in our lives."} />
      <About />
      <CentreImage text={"To transform communities into vibrant hubs of wellness and connection, where individuals thrive physically, mentally, and socially."} />
    </div>
  );
}

export default App;
