import { motion } from "framer-motion";
import img from "/src/images/Image10.webp";

function AppFeatures() {
  const arr = [
    "Subscription/Month  ",
    "Transaction Fees",
    "Chat ",
    "   Organize event  ",
    "     Create ",
    "  Groups/Account ",
    "  Admin per group/event  ",
    "     Host and organize  ",
    "  Share events (URL) ",
    "  QR Code confirmation receipt  ",
    "  Organize group/team     ",
    " Host free  events ",
    "  Monthly statement (Electronic)  ",
    "      Request to join groups & chat  ",
    "       Attendance log for events      ",
    "  Scan to take attendance (admin)   ",
    "      Spot attendance confirmation (admin)   ",
    "      Fast payout      ",
    "  Instant   payout/transaction   ",
    "      Discount   Coupons      ",
    "   Participant   waitlist   ",
    "      Sponsor  Promotion       ",
    "  Pop up Notification     ",
    "    Promote classes/Reccuring events  ",
    "       24*7 Support",
  ];
  return (
    // <div
    //   className={`bg-[${img}]  text-white flex flex-col items-center font-medium bg-cover py-[3.17rem]  `}
    // >
    <div className="bg-[url('/src/images/Image10.webp')]  text-white flex flex-col items-center font-medium bg-cover py-[3.17rem]  ">
      <h1 className=" text-[2.25rem] lg:text-[3.876rem]   pb-[2.5rem] lg:pb-[4rem]">
        {" "}
        App Features
      </h1>
      <div className="w-8/12 mx-auto ">
        <div className="flex flex-col items-start lg:grid lg:grid-cols-2 lg:gap-x-20">
          {arr.map((item, index) => {
            return (
              <motion.h1
                key={index + 1}
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
                className="text-[1.5rem]   pb-[2.5rem] lg:text-[2.188rem]"
              >
                {index + 1}. {" " + item}
              </motion.h1>
            );
          })}

          {/* <motion.h1
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
          </motion.h1> */}
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
