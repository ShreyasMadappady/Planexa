import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/Image1.webp";
import img2 from "../images/Image4.webp";
import img3 from "../images/Image2.webp";
import img4 from "../images/Image5.webp";
import img5 from "../images/Image3.webp";
import img6 from "../images/Image1.png";

function ImageCarousel() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="relative ">
      <Slider {...settings}>
        {" "}
        <img className="lg:h-[38.6rem] lg:cover" src={img6} alt="" />
        <img className="lg:h-[38.6rem] lg:cover" src={img6} alt="" />
        <img className="lg:h-[38.6rem] lg:cover" src={img6} alt="" />
        <img className="lg:h-[38.6rem] lg:cover" src={img6} alt="" />
        <img className="lg:h-[38.6rem] lg:cover" src={img6} alt="" />
        {/* <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div>{" "}
        <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div>{" "}
        <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div>{" "}
        <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div> */}
      </Slider>
      <div className="  text-[3.12rem] flex flex-col text-white absolute top-[25%] font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem] lg:text-[6.37rem] lg:gap-16  ">
        {" "}
        <h1>You plan,</h1> <h1>We execute</h1>{" "}
      </div>
    </div>
  );
}

export default ImageCarousel;
