import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import exercisesOnDisplay from './ExerciseDisplay'

import MuscleStructure from "./MuscleStructure";
import muscleActiveState from "./MuscleStructure";
const {GetExercises} = require("./MuscleStructure");


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


 it("gets Back Muscle data", () =>{
     //render(<MuscleStructure />)
     const info = GetExercises('Back');
     expect(info).toBeDefined(); 

 });

 it("gets Hamstring Muscle data", () =>{
    //render(<MuscleStructure />)
    const info = GetExercises('Hamstrings');
    expect(info).toBeDefined(); 
});


it("Shoulder Muscle data is being picked out", () =>{
    //render(<MuscleStructure />)
    const info = GetExercises('Shoulders');
    expect(info).toBeDefined(); 
});

it("gets Ab Muscle", () =>{
    //render(<MuscleStructure />)
    const info = GetExercises('Abs');
    expect(info).toBeDefined(); 
});

it("gets Quad Muscle data", () =>{
    //render(<MuscleStructure />)
    const info = GetExercises('Quads');
    expect(info).toBeDefined(); 
});

it("gets Bicep Muscle data", () =>{
    //render(<MuscleStructure />)
    const info = GetExercises('Biceps');
    expect(info).toBeDefined(); 
});

it("gets Glute Muscle data", () =>{
    //render(<MuscleStructure />)
    const info = GetExercises('Glutes');
    expect(info).toBeDefined(); 
});

it("gets Tricep Muscle data", () =>{
    const info = GetExercises('Triceps');
    expect(info).toBeDefined(); 
});

it("gets Forearm Muscle data", () =>{
    const info = GetExercises('Forearms');
    expect(info).toBeDefined(); 
});

it("gets Calves Muscle data", () =>{
    const info = GetExercises('Calves');
    expect(info).toBeDefined(); 
});


it("gets Chest Muscle data", () =>{
    const info = GetExercises('Chest');
    expect(info).toBeDefined(); 
});

it("gets Heart Muscle data", () =>{
    const info = GetExercises('Heart');
    expect(info).toBeDefined(); 
});





