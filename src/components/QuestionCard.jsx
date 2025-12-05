import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
    const [showOptions, setShowOptions] = React.useState(false);
    const [animating, setAnimating] = React.useState(true);

    React.useEffect(() => {
        // Reset state when question changes
        setAnimating(true);
        setShowOptions(false);

        // Small timeout to restart animation if needed, or just let the key prop handle it in parent
        const timer = setTimeout(() => {
            setAnimating(false);
        }, 1000); // Match animation duration

        // Show options after a delay to let user focus on image
        const optionsTimer = setTimeout(() => {
            setShowOptions(true);
        }, 800);

        return () => {
            clearTimeout(timer);
            clearTimeout(optionsTimer);
        };
    }, [question]);

    return (
        <div className="question-card soft-fade">
            <h2 className="question-text">{question.text}</h2>
            {question.image && (
                <div className="image-frame">
                    <img src={question.image} alt="Question" className="question-image" />
                </div>
            )}
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
        </div>
    );
};

export default QuestionCard;
