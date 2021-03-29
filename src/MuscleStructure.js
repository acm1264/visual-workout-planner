import React from 'react';
import './MuscleStructure.css';
import {SetExercisesOnDisplay,RemoveExercisesOnDisplay} from './ExerciseDisplay';


export const GetExercises = async (muscleName) =>
{
    //fetch all exercise data using api call
    const resp = await fetch('/api/get-muscle-ex-data');
    const data = await resp.json();

    //only keep the exercises where the primary muscle name matches the muscleName specified
    let exercisesToReturn = [];
    data.forEach(exerciseObject => 
    {
        if(exerciseObject.data.Primary_Muscle_Name === muscleName)
        {
            exercisesToReturn.push(exerciseObject.data);
        }
        
    });
    return exercisesToReturn;
}

//muscles are shared between muslce structures in some cases. Because of this, this shared variable
//will have whether or not each muscle is actively displaying exercie info or not so that if a muscle 
//shared between multiple structures is clicked, the state will be kept consistent
let muscleActiveState = {dict: {'Shoulder': false, 'Heart': false}};

export class MuscleStructure extends React.Component
{
    MuscleOnClick = async (muscleName) =>
    {
        //toggle the muscle active state
        muscleActiveState[muscleName] = !muscleActiveState[muscleName];

        // changes the color of muscles
        this.ReplaceCSSClass(muscleName);

        //process either adding exercise data from teh database if the muscle is now active, else go
        //remove the existing exercise info for the specified muscle
        if (muscleActiveState[muscleName]) 
        {
            let exercises = await GetExercises(muscleName);
            SetExercisesOnDisplay(exercises);
        }
        else
        {
            RemoveExercisesOnDisplay(muscleName);
        }
    };    

    //function called after teh state of a msucle is changed to active or inactive to replace the active css class with teh
    //inactive one, or vise versa
    ReplaceCSSClass = (muscleName) =>
    {
        let a = document.getElementsByClassName(muscleName + 'Muscle');
        for(let i = 0; i < a.length; i++)
        {
            console.log("muslce active now = " + muscleActiveState[muscleName]);
            a[i].classList.remove((muscleActiveState[muscleName] ? "MuscleInactive" : "MuscleActive"));
            a[i].classList.add(muscleActiveState[muscleName] ? "MuscleActive" : "MuscleInactive");
        }
    };
};
export default MuscleStructure;