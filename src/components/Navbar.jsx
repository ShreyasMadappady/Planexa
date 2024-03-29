import svg from "../svgs/Logo.svg";
import svg1 from "../svgs/Facebook.svg";
import svg2 from "../svgs/Twitter.svg";
import svg3 from "../svgs/Instagram.svg";
import svg4 from "../svgs/Linkedin.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between   h-[3.92rem] p-[1.26rem]">
      <img className="h-[35px]" src={svg} alt="" />
      <div className="flex gap-[1.389rem]">
        {" "}
        <div className="  gap-[1.389rem] hidden lg:flex">
          <img className="w-[1.381rem]" src={svg1} alt="" />
          <img className="w-[1.381rem]" src={svg2} alt="" />
          <img className="w-[1.381rem]" src={svg3} alt="" />
          <img className="w-[1.381rem]" src={svg4} alt="" />
        </div>
        <h1 className="text-[1rem] font-semibold ">Download</h1>
      </div>
    </div>
  );
}

export default Navbar;
