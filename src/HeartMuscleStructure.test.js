import React from "react";
import HeartMuscleStructure from "./HeartMuscleStructure"; 
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';




it('renders without crashing', () => {
    const svg = document.createElement('svg');
    ReactDOM.render(<HeartMuscleStructure />, svg);
    ReactDOM.unmountComponentAtNode(svg);
  });