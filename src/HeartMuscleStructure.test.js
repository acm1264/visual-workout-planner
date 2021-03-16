import React from "react";
import HeartMuscleStructure from "./HeartMuscleStructure"; 
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';


var heart_muscle = ['Heart'];

it('renders without crashing', () => {
    const svg = document.createElement('svg');
    ReactDOM.render(<HeartMuscleStructure />, svg);
    ReactDOM.unmountComponentAtNode(svg);
  });

  it('makes sure heart is spelled right when hovered over', () => {
    render(<HeartMuscleStructure />);
    const muscle_title = document.querySelector("#svg1470").textContent;
    var  obtained_muscle = muscle_title.split(/[ ,]+/);
    expect(obtained_muscle[0]).toBe(heart_muscle[0]);
    

     

});