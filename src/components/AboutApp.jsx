import img from "../images/Image9.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutApp() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };
  return (
    <>
      <div className=" items-center pt-[2.33rem] px-[1.63rem] pb-[5.09rem] lg:hidden">
        <h1 className="text-4xl font-bold mb-[1.33rem]  text-[#252122] lg:text-[3.556rem]">
          About app
        </h1>{" "}
        <h2 className="w-[5.56rem]  mb-[2.33rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>
        <img
          className="rounded-[1.83rem]  mb-[2.33rem] lg:w-[40%] lg:h-[48.137rem] lg:rounded-[2.778rem] cover"
          src={img}
          alt=""
        />
        <Slider {...settings}>
          <h2 className="text-2xl font-normal text-[#252122] ">
            We envision a world where sports and events are not just activities,
            but catalysts for forging enduring relationships, nurturing holistic
            health, and building resilient generations. Our aim is to be at the
            forefront of a societal shift towards inclusivity, wellness, and
            mutual support, making the joy of shared experiences and the pursuit
            of personal growth accessible to all.
          </h2>{" "}
          <h2 className="text-2xl font-normal text-[#252122]">
            It is the ipsum dolor sit, amet consectetur adipisicing elit.
            Eveniet ex ullam molestias saepe dolores, numquam quas molestiae
            exercitationem. Iste tenetur quis quas doloremque provident voluptas
            unde commodi labore vitae praesentium. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Assumenda, laborum vero voluptate
            quidem culpa, tempore reprehenderit placeat sapiente sint, eos ad
            laudantium aut quia eum recusandae optio accusamus. Commodi, animi.
          </h2>{" "}
        </Slider>
      </div>
      <div className=" items-center pt-[10.313rem] px-[3.208rem] pb-[5.09rem] hidden  lg:flex flex-row  justify-between ">
        <div className="w-5/12">
          {" "}
          <h1 className="text-4xl font-bold mb-[2.33rem]  text-[#252122] lg:text-[3.556rem]">
            About app
          </h1>{" "}
          <h2 className="w-[5.56rem]  mb-[2.33rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>{" "}
          <Slider {...settings}>
            <h2 className="text-2xl font-normal text-[#252122] ">
              We envision a world where sports and events are not just
              activities, but catalysts for forging enduring relationships,
              nurturing holistic health, and building resilient generations. Our
              aim is to be at the forefront of a societal shift towards
              inclusivity, wellness, and mutual support, making the joy of
              shared experiences and the pursuit of personal growth accessible
              to all.
            </h2>{" "}
            <h2 className="text-2xl font-normal text-[#252122]">
              It is the ipsum dolor sit, amet consectetur adipisicing elit.
              Eveniet ex ullam molestias saepe dolores, numquam quas molestiae
              exercitationem. Iste tenetur quis quas doloremque provident
              voluptas unde commodi labore vitae praesentium. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Assumenda, laborum vero
              voluptate quidem culpa, tempore reprehenderit placeat sapiente
              sint, eos ad laudantium aut quia eum recusandae optio accusamus.
              Commodi, animi.
            </h2>{" "}
          </Slider>
        </div>
        <img
          className="  mb-[2.33rem] w-[50%] lg:h-[48.137rem] lg:rounded-[2.778rem] cover"
          src={img}
          alt=""
        />
      </div>
    </>
  );
}

export default AboutApp;
