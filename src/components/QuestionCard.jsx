import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
    return (
        <div className="question-card fade-in">
            <h2 className="question-text">{question.text}</h2>
            {question.image && (
                <div className="image-frame">
                    <img src={question.image} alt="Question" className="question-image" />
                </div>
            )}
            <div className="options-grid">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-card"
                        onClick={() => onAnswer(option.scores)}
                    >
                        {option.image && <img src={option.image} alt={option.text} className="option-image" />}
                        <span className="option-text">{option.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
