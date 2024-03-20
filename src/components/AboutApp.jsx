<<<<<<< HEAD
import img from "../images/Image9.png";
=======
import Slider from "react-slick";
import img from "../images/Vision.png";

>>>>>>> 4dc6e69a6b5774d8096819558dda91440a62c467
function AboutApp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
<<<<<<< HEAD
    <div className=" items-center pt-[2.33rem] px-[1.63rem] pb-[5.09rem]">
      <h1 className="text-4xl font-bold pb-[3.5rem] text-[#252122]">
        About app
      </h1>
      <img className="rounded-[1.83rem] pb-[2.33rem]" src={img} alt="" />
      <h2 className="text-2xl font-normal text-[#252122]">
        We envision a world where sports and events are not just activities, but
        catalysts for forging enduring relationships, nurturing holistic health,
        and building resilient generations. Our aim is to be at the forefront of
        a societal shift towards inclusivity, wellness, and mutual support,
        making the joy of shared experiences and the pursuit of personal growth
        accessible to all.
      </h2>
=======
    <div className="flex flex-col items-center">
      <h1>About app</h1>
      <img src={img} alt="" />
      <div className="slider-container ">
        <Slider {...settings}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            iure explicabo eos dolores aliquam nobis, amet earum id eligendi.
            Accusamus minima fuga possimus praesentium veniam esse nihil ratione
            modi itaque?
          </h1>{" "}
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            iure explicabo eos dolores aliquam nobis, amet earum id eligendi.
            Accusamus minima fuga possimus praesentium veniam esse nihil ratione
            modi itaque?
          </h1>{" "}
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            iure explicabo eos dolores aliquam nobis, amet earum id eligendi.
            Accusamus minima fuga possimus praesentium veniam esse nihil ratione
            modi itaque?
          </h1>
        </Slider>
      </div>
>>>>>>> 4dc6e69a6b5774d8096819558dda91440a62c467
    </div>
  );
}

export default AboutApp;
