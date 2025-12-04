import React from 'react';
import { content } from '../data/content';

const Intro = ({ onStart }) => {
    const { intro } = content;

    return (
        <div className="intro-container">
            <div className="intro-content">
                <h1 className="intro-title">{intro.title}</h1>
                <p className="intro-description">{intro.description}</p>
                <button className="fantasy-button" onClick={onStart}>
                    {intro.buttonText}
                </button>
            </div>
        </div>
    );
};

export default Intro;
