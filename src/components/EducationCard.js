const EducationCard = ({ props }) => {
  const { course, institute_name, stream, percentage, img } = props;

  return (
    <div className="flex h-44 items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Education Details */}
      <div className="text-gray-800">
        <h3 className="text-lg font-semibold">
          Institute:{" "}
          <span className="font-medium text-gray-600">{institute_name}</span>
        </h3>
        <h3 className="text-lg font-semibold">
          Course: <span className="font-medium text-gray-600">{course}</span>
        </h3>
        <h3 className="text-md text-gray-600">Stream: {stream}</h3>
        <h3 className="text-md text-gray-600">Percentage: {percentage}</h3>
      </div>

      {/* Institute Logo */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          className="w-full h-full object-contain rounded-md"
          src={img}
          alt="Institute Logo"
        />
      </div>
    </div>
  );
};

export default EducationCard;
