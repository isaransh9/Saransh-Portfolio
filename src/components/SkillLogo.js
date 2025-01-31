const SkillLogo = (skill) => {
  return (
    <div className="skill-card">
      <img src={skill.props.img} alt="Error loading skills" />
      <h4>{skill.props.name}</h4>
    </div>
  );
};

export default SkillLogo;
