import React from "react";
import BackMuscleStructure from "./BackMuscleStructure"; 
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";

var back_muscles = ['Back','Shoulders','Glutes','Hamstrings','Triceps','Calves','Forearms'];




 it('renders without crashing', () => {
    const svg = document.createElement('svg');
    ReactDOM.render(<BackMuscleStructure />, svg);
    ReactDOM.unmountComponentAtNode(svg);
  });


  it('makes sure the back muscles are spelled right when hovered over', () => {
    render(<BackMuscleStructure />);
    const muscle_titles = document.querySelector("#layer1").textContent;
    var  obtained_muscles = muscle_titles.split(/[ ,]+/);
    var i;
    for (i = 0; i < obtained_muscles.length; i++) {
      expect(obtained_muscles[i]).toBe(back_muscles[i]);
     
}
  


  });


 

  

  
    
   

  


  
        
  