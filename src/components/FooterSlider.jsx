import { motion } from "framer-motion";

const slides = ["FOOTBALL ", "BASKETBALL", "ICEHOCKEY", "BASKETBALL"];
function FooterSlider() {
  const duplicatedSlides = [...slides, ...slides];
  return (
    // <div className="bg-black text-[#FFF1E1] flex justify-between px-4 py-[1.12rem] text-xs mb-[2.90rem] font-medium ">
    //   <h1>FOOTBALL</h1>
    //   <h1>•</h1>
    //   <h1>BASKETBALL</h1> <h1>•</h1>
    //   <h1>ICEHOCKEY</h1> <h1>•</h1>
    //   <h1>ICEHOCKEY</h1>
    // </div>
    <div className="relative w-full overflow-hidden">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="bg-black  items-center justify-center   text-[#FFF1E1] flex   py-[1.12rem] text-xs mb-[2.90rem] font-medium lg:text-[1.333rem] lg:py-[1.5rem] ">
              {slide}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default FooterSlider;
