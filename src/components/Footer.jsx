import svg1 from "../svgs/Facebook.svg";
import svg2 from "../svgs/Twitter.svg";
import svg3 from "../svgs/Instagram.svg";
import svg4 from "../svgs/Linkedin.svg";

function Footer() {
  return (
    <div className="flex flex-col mb-[3.35rem] ">
      <div className="flex items-center flex-col gap-[3.5rem]">
        {" "}
        <button
          className="bg-[#F49C25] text-xl font-medium p-[0.67rem] w-7/12 rounded-xl text-[#252122] lg:hidden
      "
        >
          Download app
        </button>
        <div className="flex gap-[2.11rem] lg:hidden">
          <img src={svg1} alt="" />
          <img src={svg2} alt="" />
          <img src={svg3} alt="" />
          <img src={svg4} alt="" />
        </div>{" "}
        <div className="text-[#252122] text-[1.42rem] font-semibold flex flex-col items-center lg:text-[2rem] lg:self-start lg:items-start lg:pl-[4.688rem]">
          {" "}
          <h1>Contact us:</h1>
          <h2 className="lg:font-bold">info@planexa.ca</h2>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
