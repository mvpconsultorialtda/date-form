import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import Result from './Result';
import { content } from '../data/content';

const Quiz = ({ onRestart }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({ adventure: 0, casual: 0 });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (optionScores) => {
        const newScores = {
            adventure: scores.adventure + (optionScores.adventure || 0),
            casual: scores.casual + (optionScores.casual || 0)
        };
        setScores(newScores);

        if (currentQuestionIndex < content.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return <Result scores={scores} onRestart={onRestart} />;
    }

    const currentQuestion = content.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / content.questions.length) * 100;

    return (
        <div className="quiz-container">
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
            />
        </div>
    );
};

export default Quiz;
