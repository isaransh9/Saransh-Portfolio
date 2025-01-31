import Introduction from "./Introduction";
import Education from "./Education";
import Project from "./Project";
import ContactMe from "./ContactMe";
import ThankYou from "./ThankYou";

const Body = () => {
  return (
    <div className="Body-main">
      <Introduction />
      <Education />
      <Project />
      <ContactMe />
      <ThankYou />
    </div>
  );
};

export default Body;
