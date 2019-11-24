import React from 'react';
import './App.css';
import api from './api.js';

api.get("/quizzes");

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
