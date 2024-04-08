import { motion } from "framer-motion";
function AppFeatures() {
  return (
    <div className="bg-[url('/src/images/Image10.webp')] text-white flex flex-col items-center font-medium bg-cover py-[3.17rem]  lg:pt-[8.188rem] lg:pb-[6rem]">
      <h1 className=" text-4xl lg:text-[3.876rem]  pb-[2.5rem] lg:pb-[4rem]">
        App Features
      </h1>
      <div className="lg:flex lg:gap-[9rem]">
        <div className="">
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
        </div>
        <div className="">
          {" "}
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="text-[2rem]  pb-[2.5rem]"
          >
            1. ABC one
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
