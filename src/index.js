import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About';
import MuscleStructuresContainer from './MuscleStructuresContainer';
import MuscleDropdown from './MuscleDropdown';
import ExerciseDisplay from './ExerciseDisplay';
import reportWebVitals from './reportWebVitals';
import ExerciseChecklist from './ExerciseChecklist';

ReactDOM.render(
  <React.StrictMode>
    <About />
    <MuscleDropdown />
    <MuscleStructuresContainer />
    <ExerciseChecklist />
    <ExerciseDisplay />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
