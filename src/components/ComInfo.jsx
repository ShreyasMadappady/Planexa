import img1 from "../images/Image2.png";

function ComInfo() {
  return (
    <div className="flex flex-col items-center px-[1.63rem] pt-[2.33rem] gap-[3.33rem] pb-[6.21rem]">
      <h1
        className="font-bold text-4xl text-[#252122]"
      >
        Transformative
        <br /> power of community engagement
      </h1>
      <img className="rounded-lg" src={img1} alt="" />
    </div>
  );
}

export default ComInfo;
