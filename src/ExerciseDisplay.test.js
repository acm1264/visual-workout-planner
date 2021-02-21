import { render, screen, ShallowRenderer } from '@testing-library/react';
import ExerciseDisplay from './ExerciseDisplay';
import React from 'react';
import ReactDOM from 'react-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});




  
  

 
