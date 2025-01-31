import { ReactTyped } from "react-typed";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="int-container">
          <h1>Hello I'm &nbsp;</h1>
          <ReactTyped
            className="reactTyped"
            strings={["Software Developer", "Programmer", "Saransh Meena"]}
            typeSpeed={100}
            backSpeed={100}
            loop={true}
          />
        </div>
        <div className="About-me">
          <h4>
            I am currently working as a Software Developer intern at
            Autodesk&#128640;. Previous to this, I have worked as a Backend
            Developer intern at Vizmo for 3 months. I'm from Narmadapuram district Madhya Pradesh. In my free time, I enjoy watching
            cricket, listening to music, etc.
          </h4>
        </div>
      </div>
      <div className="img-container">
        <img
          className="welcoming-img"
          src="https://imgcdn.stablediffusionweb.com/2024/4/29/be5c7a53-513e-4bac-97af-4821b60bfa21.jpg"
          alt="Error loading image"
        />
      </div>
    </div>
  );
};

export default Introduction;
