import { render, screen } from '@testing-library/react';
import MuscleStructuresContainer from './MuscleStructuresContainer';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuscleStructuresContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
  