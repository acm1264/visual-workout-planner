import React from 'react';
import './ExerciseDisplay.css';


let exercisesOnDisplay = [];

export const SetExercisesOnDisplay = (exercisesToConcat) =>
{
  exercisesOnDisplay = exercisesOnDisplay.concat(exercisesToConcat);
  window.exerciseDisplayCompnent.TriggerUpdateDisplay();
  console.log(exercisesOnDisplay);
}

export const RemoveExercisesOnDisplay = (muscleToRemove) =>
{
  var i = exercisesOnDisplay.length;
  while (i--)
  {
    if (exercisesOnDisplay[i].Primary_Muscle_Name === muscleToRemove)
    {
      // console.log(exercisesOnDisplay[i]);
      exercisesOnDisplay.splice(i,1);
    }
  }
  window.exerciseDisplayCompnent.TriggerUpdateDisplay();
   
}


//this file contains the top-level information for the app, being the content about what the app is and 
//how to use it that is located at the top of the app
export default class ExerciseDisplay extends React.Component 
// export default function ExerciseDisplay()
{

  constructor(){
    super();
    window.exerciseDisplayCompnent = this;
  }

  TriggerUpdateDisplay = () =>
  {
    console.log("trigger update here");
    this.forceUpdate();
  }


  render(){
    return (
      <div>
        {exercisesOnDisplay.map(exercise => (
          //for each exercise, add the exercise box class to keep the display consistent, as well as the class for the specific
          //primary muscle that is being used to allow for easily removing boxes (may not be needed??????? because may be able to 
          //simply just remove them form the array and this auto-updates). Key msut be unique for each leemnet in react list,
          //so the name of the exercise was chosen
          <div className={[exercise.Primary_Muscle_Name + "Muscle", "ExerciseBox"].join(' ')} key={exercise.Exercise_Name}>
            <p>{exercise.Exercise_Name}</p>
            <p>{exercise.Description}</p>
            <p>{exercise.Form_Tips}</p>
          </div>
        ))}
      </div>
    );}
}
