import React from 'react';
import './MuscleStructure.css';

//////////////test function called add delete me
export const add = (x, y) => x+y;

//muscles are shared between muslce structures in some cases. Because of this, this shared variable
//will have whether or not each muscle is actively displaying exercie info or not so that if a muscle 
//shared between multiple structures is clicked, the state will be kept consistent
let muscleActiveState = {dict: {'Shoulder': false, 'Heart': false}};

export class MuscleStructure extends React.Component
{
    

    MuscleOnClick = (muscleName) =>
    {
        // alert(muscleName);

        console.log("clicked " + muscleName + " is currenly " + muscleActiveState[muscleName]);
        muscleActiveState[muscleName] = !muscleActiveState[muscleName];
        console.log("...now it is " + muscleActiveState[muscleName]);
        this.ReplaceCSSClass(muscleName);
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