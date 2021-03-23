import React, {useState} from 'react';
// import DBAccess from './DBAccess';
import './MuscleStructure.css';

//////////////test function called add delete me
export const add = (x, y) => x+y;

// export const [exercises, setExercises] = useState();
export const GetExercises = async (muscleName) =>
{
    // const [exercises, setExercises] = useState();
    const resp = await fetch('/api/get-muscle-ex-data')
    const data = await resp.json()
    console.log(data);// data;
    // setExercises(data)

    let exercisesToReturn = [];
    data.forEach(exerciseObject => 
    {
        if(exerciseObject.data.Primary_Muscle_Name == muscleName)
        {
            exercisesToReturn.push(exerciseObject.data);
        }
        // console.log(exerciseObject.data.Primary_Muscle_Name);
        
    });
    return exercisesToReturn;
}



//muscles are shared between muslce structures in some cases. Because of this, this shared variable
//will have whether or not each muscle is actively displaying exercie info or not so that if a muscle 
//shared between multiple structures is clicked, the state will be kept consistent
let muscleActiveState = {dict: {'Shoulder': false, 'Heart': false}};

// function GetExercisesFromDB(muscleName)
// {
//     const [exercises, setExercises] = useState();
//     const getExercises = async () => 
//     {
//         const resp = await fetch('/api/get-muscle-ex-data')
//         const data = await resp.json()
//         setExercises(data)
//     }
// }

export class MuscleStructure extends React.Component
{
    MuscleOnClick = async (muscleName) =>
    {
        console.log("clicked " + muscleName + " is currenly " + muscleActiveState[muscleName]);
        muscleActiveState[muscleName] = !muscleActiveState[muscleName];
        console.log("...now it is " + muscleActiveState[muscleName]);

        this.ReplaceCSSClass(muscleName);

        console.log(muscleName);
        let exercises = await GetExercises(muscleName);
        console.log("exercises: ")
        console.log(exercises);
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
        // a.forEach(x => console.log(x));
        // a.forEach( x => x.className += (muscleActiveState[muscleName] ? " MuscleActive" : " MuscleInactive"));
        // a.forEach( x => x.classList.remove((muscleActiveState[muscleName] ? "MuscleInactive" : "MuscleActive")) );
    };
};
export default MuscleStructure;