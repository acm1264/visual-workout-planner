import React from "react";
import FrontMuscleStructure from "./FrontMuscleStructure";
import {unmountComponentAtNode } from "react-dom";
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom";

var front_muscles = ['Biceps','Abs','Chest','Calves','Forearms','Quads','Shoulders'];


it('makes sure the front muscles are spelled right when hovered over', () => {
    render(<FrontMuscleStructure />);
    const muscle_titles = document.querySelector("#layer1").textContent;
    var  obtained_muscles = muscle_titles.split(/[ ,]+/);
    var i;

    for (i = 0; i < obtained_muscles.length; i++) {
      expect(obtained_muscles[i]).toBe(front_muscles[i]);
     
}

});

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders without crashing', () => {
    const svg = document.createElement('svg');
    render(<FrontMuscleStructure />, svg);
    expect(FrontMuscleStructure).toBeDefined();
});




