import svg1 from "../svgs/Facebook.svg";
import svg2 from "../svgs/Twitter.svg";
import svg3 from "../svgs/Instagram.svg";
import svg4 from "../svgs/Linkedin.svg";

function Footer() {
  return (
    <div className="flex flex-col mb-[3.35rem] ">
      <div className="bg-black text-[#FFF1E1] flex justify-between px-4 py-[1.12rem] text-xs mb-[2.90rem] font-medium ">
        <h1>FOOTBALL</h1>
        <h1>•</h1>
        <h1>BASKETBALL</h1> <h1>•</h1>
        <h1>ICEHOCKEY</h1> <h1>•</h1>
        <h1>ICEHOCKEY</h1>
      </div>
      <div className="flex items-center flex-col gap-[3.5rem]">
        {" "}
        <button
          className="bg-[#F49C25] text-xl font-medium p-[0.67rem] w-7/12 rounded-xl text-[#252122]
      "
        >
          Download app
        </button>
        <div className="flex gap-[2.11rem]">
          <img src={svg1} alt="" />
          <img src={svg2} alt="" />
          <img src={svg3} alt="" />
          <img src={svg4} alt="" />
        </div>{" "}
        <div className="text-[#252122] text-[1.42rem] font-semibold flex flex-col items-center">
          {" "}
          <h1>Contact us:</h1>
          <h2>info@planexa.ca</h2>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
