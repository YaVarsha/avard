function GoalCard({ title, text, icon }) {
  return (
    <div className="goal-card">

      <div className="goal-icon">
        {icon}
      </div>

      <h4>{title}</h4>
      <p>{text}</p>

    </div>
  );
}

export default GoalCard;