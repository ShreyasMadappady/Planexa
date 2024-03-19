import img1 from "../images/Image3.png";
function About() {
  return (
    <>
      <div className="bg-black mx-[1.59rem] my-[2.54rem] rounded-[1.64rem]">
        <div className="pl-[2.51rem] pt-[2.57rem] pr-[3.46rem] ">
          {" "}
          <h1 className="text-[#F49C25] text-[2.04rem] font-bold pb-[0.46rem]">
            Who Are we
          </h1>
          <h2 className="text-[#FFF1E1] pb-[2.52rem] text-[1.03rem]">
            Founded on the principles of inclusivity, health, and connectivity.
            We are a movement towards creating a more engaged, healthy, and
            united community. We excel in orchestrating diverse sports and
            gathering events, all geared to bring people together, breaking down
            barriers and creating platforms for mutual understanding and
            support.
          </h2>
        </div>
        <img className="rounded-b-[1.64rem]" src={img1} alt="" />
      </div>
      <div className="bg-black mx-[1.59rem] my-[2.54rem] rounded-[1.64rem]">
        <div className="pl-[2.51rem] pt-[2.57rem] pr-[3.46rem] ">
          {" "}
          <h1 className="text-[#F49C25] text-[2.04rem] font-bold pb-[0.46rem]">
          Vision
          </h1>
          <h2 className="text-[#FFF1E1] pb-[2.52rem] text-[1.03rem]">
          We envision a world where sports and events are not just activities, but catalysts for forging enduring relationships, nurturing holistic health, and building resilient generations. Our aim is to be at the forefront of a societal shift towards inclusivity, wellness, and mutual support, making the joy of shared experiences and the pursuit of personal growth accessible to all.
          </h2>
        </div>
        <img className="rounded-b-[1.64rem]" src={img1} alt="" />
      </div>
    </>
  );
}

export default About;
