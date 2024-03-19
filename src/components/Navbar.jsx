import navimg from "../images/DarkLogo.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white mt-[2.90rem] h-[3.92rem]">
      <img className="h-[7.5rem]" src={navimg} alt="" />
      <h1 className="text-[1.25rem] font-semibold pr-[1.26rem]">Download</h1>
    </div>
  );
}

export default Navbar;
