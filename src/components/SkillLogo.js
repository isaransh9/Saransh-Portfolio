const SkillLogo = ({ props }) => {
  return (
    <div className="flex flex-col mx-3 items-center justify-center hover:shadow-lg transition-shadow duration-300">
      <img
        src={props.img}
        alt="Error loading skills"
        className="w-24 h-24 border-2 border-gray-300 bg-white rounded-full p-2 transition-transform duration-300 hover:scale-105 object-cover"
      />
      <h4 className="mt-2 text-white font-medium text-lg">{props.name}</h4>
    </div>
  );
};

export default SkillLogo;
