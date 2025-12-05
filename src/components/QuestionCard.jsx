import React from 'react';

const QuestionCard = ({ question, onAnswer, exiting }) => {
    const [showOptions, setShowOptions] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    React.useEffect(() => {
        // Reset state when question changes
        setImageLoaded(false);
        setShowOptions(false);

        // If no image, we are ready immediately
        if (!question.image) {
            setImageLoaded(true);
        }
    }, [question]);

    React.useEffect(() => {
        if (!exiting && imageLoaded) {
            // Start options timer only after image is loaded and we are entering
            const optionsTimer = setTimeout(() => {
                setShowOptions(true);
            }, 800);
            return () => clearTimeout(optionsTimer);
        }
    }, [exiting, imageLoaded]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    // Determine main container class
    // If exiting: soft-fade-out
    // If entering (not exiting):
    //    - If image not loaded: opacity 0 (invisible)
    //    - If image loaded: soft-fade (animate in)
    let containerClass = 'question-card';
    let style = {};

    if (exiting) {
        containerClass += ' soft-fade-out';
    } else {
        if (!imageLoaded) {
            style = { opacity: 0 }; // Hide while loading
        } else {
            containerClass += ' soft-fade';
        }
    }

    return (
        <div className={containerClass} style={style}>
            <h2 className="question-text">{question.text}</h2>
            {question.image && (
                <div className="image-frame">
                    <img
                        src={question.image}
                        alt="Question"
                        className="question-image"
                        onLoad={handleImageLoad}
                    />
                </div>
            )}
            <div className={`options-grid ${showOptions ? 'fade-in' : ''}`} style={{ opacity: showOptions ? 1 : 0 }}>
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-card"
                        onClick={() => onAnswer(option.scores)}
                        disabled={!showOptions}
                    >
                        <span className="option-text">{option.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
