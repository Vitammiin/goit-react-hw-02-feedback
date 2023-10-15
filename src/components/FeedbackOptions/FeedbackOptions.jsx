const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(name => (
        <button onClick={() => onLeaveFeedback(name)} key={name}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
