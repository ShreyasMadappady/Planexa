import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/Image1.png";
import img2 from "../images/Image4.png";
import img3 from "../images/Image2.png";
import img4 from "../images/Image5.png";
import img5 from "../images/Image3.png";

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
    <div>
      <Slider {...settings}>
        {" "}
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
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
      <h1 className="  text-[3.12rem] text-white absolute top-10 font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
        You plan,
        <br /> We execute
      </h1>{" "}
    </div>
  );
}

export default ImageCarousel;
