import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';

import './App.css';

function App() {

  const [showText, setShowText] = useState(false);

  const buttonHandler = useCallback(() => {
    setShowText(lastText => !lastText);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showText} />
      <Button onClick={buttonHandler}>click me!</Button>
    </div>
  );
}

export default App;
