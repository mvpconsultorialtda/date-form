import React, { useState } from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [key, setKey] = useState(0); // To force remount on restart

  const handleStart = () => {
    setStarted(true);
  };

  const handleRestart = () => {
    setStarted(false);
    setKey(prev => prev + 1);
  };

  return (
    <div className="app-container" key={key}>
      {!started ? (
        <Intro onStart={handleStart} />
      ) : (
        <Quiz onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
