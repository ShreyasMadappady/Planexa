import svg from "../svgs/Logo.svg";
function Navbar() {
  return (
    <div className="flex items-center justify-between   h-[3.92rem] p-[1.26rem]">
      <img className="h-[35px]" src={svg} alt="" />
      <h1 className="text-[1rem] font-semibold ">Download</h1>
    </div>
  );
}

export default Navbar;
