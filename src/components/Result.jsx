import React from 'react';
import { content } from '../data/content';

const Result = ({ scores, onRestart }) => {
    const { results } = content;

    // Logic: Compare adventure score vs casual score
    // If adventure >= casual, result is adventure (Wine)
    // Else result is casual (Ice Cream)
    const resultType = scores.adventure >= scores.casual ? 'adventure' : 'casual';
    const result = results[resultType];

    return (
        <div className="result-container fade-in">
            <h1 className="result-title">{result.title}</h1>
            {result.image && (
                <div className="image-frame">
                    <img src={result.image} alt={result.title} className="result-image" />
                </div>
            )}
            <p className="result-description">{result.description}</p>
            <button className="fantasy-button" onClick={onRestart}>
                Começar de Novo
            </button>
        </div>
    );
};

export default Result;
