// import { useState } from "react";
// import { useEffect } from "react";

// function Carousel() {
//   const images = [
//     "src/images/Image1.png",
//     "src/images/Image2.png",
//     "src/images/Image3.png",
//     "src/images/Image4.png",
//     "src/images/Image5.png",
//   ]; // replace with your images
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((currentImageIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(timer); // Clean up on component unmount
//   }, [currentImageIndex]);

//   return (
//     <div
//       className="h-full"
//       style={{
//         backgroundImage: `url(${images[currentImageIndex]})`,
//         backgroundSize: "cover",
//         transition: "background-image 1s ease-in-out",
//         // textShadow: "2px 2px 4px #000000",
//       }}
//     >
//       <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
//         You plan,
//         <br /> We execute
//       </h1>{" "}
//     </div>
//   );
// }

// export default Carousel;

