import svg1 from "../svgs/Svg1.svg";
import svg2 from "../svgs/Star.svg";
import svg3 from "../svgs/Scales.svg";
import svg4 from "../svgs/Globe.svg";
import svg5 from "../svgs/Person.svg";

function Values() {
  return (
    <div className="py-[3.5rem] pl-[1.63rem] w-9/12 flex flex-col ">
      <h1 className="font-bold text-4xl mb-[1.5rem] lg:text-[3.556rem] lg:pb-5">
        The Values We Stand For
      </h1>
      <h2 className="w-[5.56rem] bg-[#252122] self-start h-0.5  mb-[2rem] lg:w-8/12 lg:mb-[7.313rem]"></h2>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        
        <div className="lg:flex lg:justify-center">
          {" "}
          <div className="flex flex-col gap-2 pb-[3.32rem]">
            <img className="w-[3.28rem]" src={svg1} alt="" />
            <h1 className="font-semibold text-2xl">Community First</h1>
            <h2 className="font-medium text-md">
              We believe in the power of community to inspire positive change.
              Our initiatives are designed to bring people together, fostering a
              sense of belonging and collective growth.
            </h2>
          </div>
          <div className="flex flex-col gap-2 pb-[3.32rem]">
            <img className="w-[3.28rem]" src={svg2} alt="" />
            <h1 className="font-semibold text-2xl">Holistic Wellness</h1>
            <h2 className="font-medium text-md">
              Acknowledging the interconnectedness of mental and physical
              health, we champion initiatives that nurture the whole person,
              encouraging a balanced approach to wellness.
            </h2>
          </div>
          <div className="flex flex-col gap-2 pb-[3.32rem]">
            <img className="w-[3.28rem]" src={svg5} alt="" />
            <h1 className="font-semibold text-2xl">
              Relationships & Connectivity
            </h1>
            <h2 className="font-medium text-md">
              The heart of Planexa is the belief in the power of strong
              relationships. We facilitate connections that endure, built on
              trust, respect, and shared experiences.
            </h2>
          </div>
        </div>
        <div className="lg:flex">
          <div className="flex flex-col gap-2 pb-[3.32rem]">
            <img className="w-[3.28rem]" src={svg4} alt="" />
            <h1 className="font-semibold text-2xl">
              Empowering Community Well-being
            </h1>
            <h2 className="font-medium text-md">
              Committed to fostering holistic health and happiness through
              collaborative initiatives and unwavering support.
            </h2>
          </div>
          <div className="flex flex-col gap-2 pb-[3.32rem]">
            <img className="w-[3.28rem]" src={svg3} alt="" />
            <h1 className="font-semibold text-2xl">Inclusivity & Diversity</h1>
            <h2 className="font-medium text-md">
              Embracing thestrength found in diversity, we are committed to
              creating spaces and eventsthat are welcoming to all, regardless of
              background, ability, or age.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
