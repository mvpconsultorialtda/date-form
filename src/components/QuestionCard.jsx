<div className={`options-grid ${showOptions ? 'fade-in' : ''}`} style={{ opacity: showOptions ? 1 : 0 }}>
    {question.options.map((option, index) => (
        <button
            key={index}
            className="option-card"
            onClick={() => onAnswer(option.scores)}
            disabled={!showOptions} // Prevent accidental clicks before visible
        >
            <span className="option-text">{option.text}</span>
        </button>
    ))}
</div>
        </div >
    );
};

export default QuestionCard;
