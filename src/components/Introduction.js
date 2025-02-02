import { ReactTyped } from "react-typed";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg p-6 text-white">
      <div className="flex-1 space-y-4">
        <div className="flex items-center text-3xl font-extrabold">
          <h1>Hello, I'm&nbsp;</h1>
          <ReactTyped
            className="text-blue-400"
            strings={["Software Developer", "Programmer", "Saransh Meena"]}
            typeSpeed={100}
            backSpeed={100}
            loop={true}
          />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-lg leading-relaxed">
            I am currently working as a{" "}
            <span className="text-green-400">Software Developer Intern</span> at
            Autodesk🚀. Previously, I was a{" "}
            <span className="text-purple-400">Backend Developer Intern</span> at
            Vizmo for 3 months. I'm from{" "}
            <span className="text-yellow-400">
              Narmadapuram, Madhya Pradesh
            </span>
            . In my free time, I enjoy watching
            <span className="text-red-400"> cricket</span>, listening to music,
            etc.
          </h4>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-6 md:mt-0">
        <img
          className="w-80 h-80 object-cover rounded-full shadow-xl border-4 border-blue-500"
          src="https://imgcdn.stablediffusionweb.com/2024/4/29/be5c7a53-513e-4bac-97af-4821b60bfa21.jpg"
          alt="Error loading image"
        />
      </div>
    </div>
  );
};

export default Introduction;
