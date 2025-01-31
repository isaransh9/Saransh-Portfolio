const EducationCard = (edu) => {
  const { course, institute_name, stream, percentage, img } = edu.props;
  return (
    <div className="education-card">
      <div className="education-details">
        <h3>Institute Name: {institute_name}</h3>
        <h3>Course: {course}</h3>
        <h3>Stream/Branch: {stream}</h3>
        <h3>Percentage: {percentage}</h3>
      </div>
      <div className="institute-logo">
        <img src={img} alt="Error loading image" />
      </div>
    </div>
  );
};

export default EducationCard;
