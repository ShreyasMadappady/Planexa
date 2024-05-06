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
    arrows: false,
  };

  return (
    <div className=" 2xl:mx-[10rem]">
      <div className=" items-center pt-[2.33rem] px-[1.63rem] pb-[5.09rem] lg:hidden  2xl:mx-[4rem]">
        <h1
          className={`text-4xl font-bold mb-[1.33rem]  text-[#252122]   lg:text-[3.556rem]`}
        >
          How it works
        </h1>{" "}
        <h2 className="w-[10rem]  mb-[2.33rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>
        <img
          className="rounded-[1.83rem]  mb-[2.33rem] lg:w-[40%] lg:h-[48.137rem] lg:rounded-[2.778rem] cover"
          src={img}
          alt=""
        />
        <Slider {...settings}>
          {" "}
          <div>
            <h1 className="text-[1.7rem] font-bold pb-[0.5rem] text-[#252122]">
              1. Download and Sign Up.
            </h1>
            <h2 className="text-[1.5rem] font-normal text-[#252122]">
              Download our app from either the App Store or Google Play Store.
              Our intuitive user interface ensures a seamless onboarding
              process, making it effortless for you to get started.
            </h2>{" "}
          </div>
          <div>
            {" "}
            <h1 className="text-[1.7rem] font-bold pb-[0.5rem] text-[#252122]">
              2. Create or join an event.
            </h1>
            <h2 className="text-[1.5rem] font-normal text-[#252122]">
              Utilize our platform to effortlessly craft and personalize your
              events, which can then be seamlessly shared with your community
              through various channels. Explore and engage with a myriad of
              events in your vicinity, providing users with unparalleled
              opportunities to connect and participate.
            </h2>{" "}
          </div>
          <div>
            {" "}
            <h1 className="text-[1.7em] font-bold pb-[0.5rem] text-[#252122]">
              3. Organize, Payout and Connect.
            </h1>
            <h2 className="text-[1.5rem] font-normal text-[#252122]">
              Experience a wealth of features tailored to streamline event
              organization and planning, including scheduled payouts to
              alleviate post-event tasks. It's time for you to unwind and relish
              in your event, knowing that we've got you covered every step of
              the way.
            </h2>{" "}
          </div>
        </Slider>
      </div>
      <div className=" items-center mt-[5.474rem]  pb-[5.09rem] hidden  lg:flex flex-row  justify-between xl:px-[3.208rem] gap-">
        <div className="w-5/12">
          {" "}
          <h1
            className={`text-4xl font-bold mb-[2.33rem]  text-[#252122] lg:text-[3.556rem]`}
          >
            How it works
          </h1>
          <h2 className="w-[5.56rem]  mb-[2.33rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>{" "}
          <Slider {...settings}>
            <div>
              <h1 className="text-[2.25rem] font-bold pb-[0.5rem] text-[#252122]">
                1. Download and Sign Up.
              </h1>
              <h2 className="text-[2rem] font-normal text-[#252122]">
                Download our app from either the App Store or Google Play Store.
                Our intuitive user interface ensures a seamless onboarding
                process, making it effortless for you to get started.
              </h2>{" "}
            </div>
            <div>
              {" "}
              <h1 className="text-[2.25rem] font-bold pb-[0.5rem] text-[#252122]">
                2. Create or join an event.
              </h1>
              <h2 className="text-[2rem] font-normal text-[#252122]">
                Utilize our platform to effortlessly craft and personalize your
                events, which can then be seamlessly shared with your community
                through various channels. Explore and engage with a myriad of
                events in your vicinity, providing users with unparalleled
                opportunities to connect and participate.
              </h2>{" "}
            </div>
            <div>
              {" "}
              <h1 className="text-[2.25rem] font-bold pb-[0.5rem] text-[#252122]">
                3. Organize, Payout and Connect.
              </h1>
              <h2 className="text-[2rem] font-normal text-[#252122]">
                Experience a wealth of features tailored to streamline event
                organization and planning, including scheduled payouts to
                alleviate post-event tasks. It's time for you to unwind and
                relish in your event, knowing that we've got you covered every
                step of the way.
              </h2>{" "}
            </div>
          </Slider>
        </div>
        <img
          className="  mb-[2.33rem] w-[50%] lg:h-[45rem]  lg:w-[35.75rem]  lg:rounded-[2.778rem] cover"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutApp;
