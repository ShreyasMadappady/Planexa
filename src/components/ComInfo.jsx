import img1 from "../images/Image6.webp";

function ComInfo() {
  return (
    <div className="flex flex-col items-center px-[1.63rem] pt-[2.33rem] gap-[1.33rem] pb-[6.21rem]">
      <h1 className="font-bold text-4xl text-[#252122] ">
        Transformative
        <br /> power of community engagement
      </h1>
      <h2
        className="w-[5.56rem] bg-[#252122] self-start h-0.5"
      ></h2>
      <img className="rounded-lg" src={img1} alt="" />
    </div>
  );
}

export default ComInfo;
