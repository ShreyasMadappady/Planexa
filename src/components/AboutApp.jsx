import img from "../images/Image9.png";
function AboutApp() {
  return (
    <div className=" items-center pt-[2.33rem] px-[1.63rem] pb-[5.09rem]">
      <h1 className="text-4xl font-bold pb-[3.5rem] text-[#252122]">
        About app
      </h1>
      <img className="rounded-[1.83rem] pb-[2.33rem]" src={img} alt="" />
      <h2 className="text-2xl font-normal text-[#252122]">
        We envision a world where sports and events are not just activities, but
        catalysts for forging enduring relationships, nurturing holistic health,
        and building resilient generations. Our aim is to be at the forefront of
        a societal shift towards inclusivity, wellness, and mutual support,
        making the joy of shared experiences and the pursuit of personal growth
        accessible to all.
      </h2>
    </div>
  );
}

export default AboutApp;
