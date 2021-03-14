import React from "react";
import BackMuscleStructure from "./BackMuscleStructure"; 
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";




 it('renders without crashing', () => {
    const svg = document.createElement('svg');
    ReactDOM.render(<BackMuscleStructure />, svg);
    ReactDOM.unmountComponentAtNode(svg);
  });


  it("runs correctly", () =>{
    render(<BackMuscleStructure />);
    let inputs = document.getElementById('layer1').lastElementChild.text;
    console.log(inputs);

  

  
    
    

  });

  


  
        
  