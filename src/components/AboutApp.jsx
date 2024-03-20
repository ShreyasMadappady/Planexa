import img from "../images/Vision.png";
function AboutApp() {
  return (
    <div className="flex flex-col items-center">
      <h1>About app</h1>
      <img src={img} alt="" />
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illo
        aperiam ullam, ea corporis laboriosam, doloremque autem minus
        repellendus ut corrupti adipisci dolore delectus. In veniam perferendis
        voluptate quidem id!
      </h2>
    </div>
  );
}

export default AboutApp;
