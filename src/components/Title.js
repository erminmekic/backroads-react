const Title = ({ text, highlightedText }) => {
  return (
    <div className='section-title'>
      <h2>
        {text} <span>{highlightedText}</span>
      </h2>
    </div>
  );
};
export default Title;
