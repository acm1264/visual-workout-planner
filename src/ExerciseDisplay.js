import React from 'react';
import './ExerciseDisplay.css';
import $ from 'jquery';

//as exercises are retrieved from the DB, they are placed inside this array. All exercises in this array willl be displayed in a box
let exercisesOnDisplay = [];

//add all given exercise data to the exercisesOnDisplay arry and trigger the ExerciseDisplay renderer to be updated
export const SetExercisesOnDisplay = (exercisesToConcat) =>
{
  exercisesOnDisplay = exercisesOnDisplay.concat(exercisesToConcat);
  window.exerciseDisplayCompnent.TriggerUpdateDisplay();
}

// Memoize Set ExerciseDisplay
export const MemoizedSetExercisesOnDisplay = React.memo(SetExercisesOnDisplay);

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

// Memoize RemoveExerciseDisplay
export const MemoizedRemoveExercisesOnDisplay = React.memo(RemoveExercisesOnDisplay);


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

  //certain elements inside the boxes are kept hidden unless the user presses a button for displaying them. Clicking the button will
  //add/remove the class from that element to hide/show the content
  ToggleContentVisibility = (buttonClicked) =>
  {
    //using jquery, the button will have the content as its sibling with the "contentInBox" class, so toggle the hidden class on it
    $(buttonClicked.target).siblings(".contentInBox").toggleClass("hideContentInBox");
  }



  render(){
    return (
      <div id="ExerciseBoxContainer">

        {/* functionality for the checklist options is inside the exercise box display so it can be used by the display to
        update what content is/is not shown */}
        <div>
          <label>
            <input type="checkbox" name="Stretches" />
            Stretches
          </label>

          <label>
            <input type="checkbox" name="Stretches" />
            Non-Stretches
          </label>
        </div>


        {exercisesOnDisplay.map(exercise => (
          //for each exercise, add the exercise box class to keep the display consistent, as well as the class for the specific
          //primary muscle that is being used to allow for easily removing boxes (may not be needed??????? because may be able to 
          //simply just remove them form the array and this auto-updates). Key msut be unique for each leemnet in react list,
          //so the name of the exercise was chosen 

          //exercise should be hidden entirely (given the hideContentInBox class) if it is a stretch and the checkbox for stretches is
          //deactivated, or same thing for non-stretches
          <div /*className={`${(exercise.Is_Stretch && ) ? "hideContentInBox" : ""}`*/>
            <div className={[exercise.Primary_Muscle_Name + "Muscle", "ExerciseBox"].join(' ')} key={exercise.Exercise_Name}>
              <h1><img src="dumbellFavicon_16x16px.png" alt="dumbell 1"/> {exercise.Exercise_Name} <img src="dumbellFavicon_16x16px.png" alt="dumbell 2"/></h1>
              <p className="muscleNameInBox">{exercise.Primary_Muscle_Name}</p>
              
              <p><button className="contentInBoxTitle" onClick={this.ToggleContentVisibility.bind(this)}>Description: </button> <div className="contentInBox hideContentInBox">{exercise.Description}</div></p>
              <p><button className="contentInBoxTitle" onClick={this.ToggleContentVisibility.bind(this)}>Helpful Tips: </button> <div className="contentInBox hideContentInBox">{exercise.Form_Tips}</div></p>
              <p><button className="contentInBoxTitle" onClick={this.ToggleContentVisibility.bind(this)}>Video: </button> <div className="contentInBox hideContentInBox">{exercise.Video}</div></p>
            </div>
          </div>  
        ))}
      </div>
    );}
}
