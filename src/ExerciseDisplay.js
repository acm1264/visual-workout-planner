import React from 'react';
import './ExerciseDisplay.css';

//as exercises are retrieved from the DB, they are placed inside this array. All exercises in this array willl be displayed in a box
let exercisesOnDisplay = [];

//add all given exercise data to the exercisesOnDisplay arry and trigger the ExerciseDisplay renderer to be updated
export const SetExercisesOnDisplay = (exercisesToConcat) =>
{
  exercisesOnDisplay = exercisesOnDisplay.concat(exercisesToConcat);
  window.exerciseDisplayCompnent.TriggerUpdateDisplay();
}

export const RemoveExercisesOnDisplay = (muscleToRemove) =>
{
  var i = exercisesOnDisplay.length;

  //go through the displayed exercises backwards in order to remove all exercises with the given exercise name
  while (i--)
  {
    if (exercisesOnDisplay[i].Primary_Muscle_Name === muscleToRemove)
    {
      exercisesOnDisplay.splice(i,1);
    }
  }
  window.exerciseDisplayCompnent.TriggerUpdateDisplay();
}


//this file contains the top-level information for the app, being the content about what the app is and 
//how to use it that is located at the top of the app
export default class ExerciseDisplay extends React.Component
{

  constructor()
  {
    super();
    //setup the exercise dipslay instance ot be globally accessable so that the renderer can be forced to update when
    //exercises are added/removed to the outside array
    window.exerciseDisplayCompnent = this;
  }

  //force the rendered to be updated so it takes into account added/removed exercises
  TriggerUpdateDisplay = () =>
  {
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
          <div>
            <div className={[exercise.Primary_Muscle_Name + "Muscle", "ExerciseBox"].join(' ')} key={exercise.Exercise_Name}>
              <h1><img src="dumbellFavicon_16x16px.png" alt="dumbell 1"/> {exercise.Exercise_Name} <img src="dumbellFavicon_16x16px.png" alt="dumbell 2"/></h1>
              <p id="muscle">{exercise.Primary_Muscle_Name}</p>
              <p><span id="info">Description: </span>{exercise.Description}</p>
              <p><span id="info">Helpful Tips: </span> {exercise.Form_Tips}</p>
            </div>
          </div>  
        ))}
      </div>
    );}
}
