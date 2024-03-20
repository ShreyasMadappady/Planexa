import Slider from "react-slick";
import img from "../images/Vision.png";

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
    </div>
  );
}

export default AboutApp;
