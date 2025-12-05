import React from 'react';

const QuestionCard = ({ question, onAnswer, exiting }) => {
    const [showOptions, setShowOptions] = React.useState(false);

    React.useEffect(() => {
        if (!exiting) {
            setShowOptions(false);
            const optionsTimer = setTimeout(() => {
                setShowOptions(true);
            }, 800);
            return () => clearTimeout(optionsTimer);
        }
    }, [question, exiting]);

    return (
        <div className={`question-card ${exiting ? 'soft-fade-out' : 'soft-fade'}`}>
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
