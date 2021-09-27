import React, { useEffect, useState } from 'react';
import './App.scss';

const App = () => {
  // Sample Code
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    setTitleText('Hello, React!');
  }, []);

  return (
    <>
      <h1>{titleText}</h1>
    </>
  );
};

export default App;
