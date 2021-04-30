import React from 'react';
import './ExerciseDisplay.css';
import $ from 'jquery';

//as exercises are retrieved from the DB, they are placed inside this array. All exercises in this array willl be displayed in a box
let exercisesOnDisplay = [];

let showStretches = true;
let showNonStretches = true;

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

// find position of element on page
function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj === obj.offsetParent);
  return [curtop];
  }
}

// scroll to the element
export const scrollToExercise = () =>
{
  window.scrollTo({
        top: findPos(document.getElementById("CheckboxesHolder"))-450,
        left: 0, 
        behavior: 'smooth',
    })
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

  //certain elements inside the boxes are kept hidden unless the user presses a button for displaying them. Clicking the button will
  //add/remove the class from that element to hide/show the content
  ToggleContentVisibility = (buttonClicked) =>
  {
    //using jquery, the button will have the content as its sibling with the "contentInBox" class, so toggle the hidden class on it
    $(buttonClicked.target).siblings(".contentInBox").toggleClass("hideContentInBox");
  }

  ToggleStretchDisplay = () =>
  {
    showStretches = !showStretches;
    this.forceUpdate();
  }

  ToggleNonStretchDisplay = () =>
  {
    showNonStretches = !showNonStretches;
    this.forceUpdate();
  }

  render(){
    return (
      <div>

        {/* functionality for the checklist options is inside the exercise box display so it can be used by the display to
        update what content is/is not shown */}
        <h2>Filter Exercises by Category</h2>
        <div id="CheckboxesHolder">
          <label className="checkboxLabel">
            <input type="checkbox" name="Stretches" className="checkbox" checked={showStretches} onClick={this.ToggleStretchDisplay.bind()}/>
            Stretches
          </label>

          <label className="checkboxLabel">
            <input type="checkbox" name="NonStretches" className="checkbox" checked={showNonStretches} onClick={this.ToggleNonStretchDisplay.bind()}/>
            Non-Stretches
          </label>
        </div>

        <div id="ExerciseBoxContainer">
          {exercisesOnDisplay.map(exercise => (
            //for each exercise, add the exercise box class to keep the display consistent, as well as the class for the specific
            //primary muscle that is being used to allow for easily removing boxes (may not be needed??????? because may be able to 
            //simply just remove them form the array and this auto-updates). Key msut be unique for each leemnet in react list,
            //so the name of the exercise was chosen 

            //exercise should be hidden entirely (given the hideContentInBox class) if it is a stretch and the checkbox for stretches is
            //deactivated, or same thing for non-stretches
            <div className={`${(exercise.Is_Stretch && !showStretches) || (!exercise.Is_Stretch && !showNonStretches) ? "hideContentInBox" : ""}`}>
              <div className={[exercise.Primary_Muscle_Name + "Muscle", "ExerciseBox"].join(' ')} key={exercise.Exercise_Name}>
                <h1><img src="dumbellFavicon_16x16px.png" alt="dumbell 1"/> {exercise.Exercise_Name} <img src="dumbellFavicon_16x16px.png" alt="dumbell 2"/></h1>
                <p className="muscleNameInBox">{exercise.Primary_Muscle_Name}</p>
                
                
                <button className="contentInBoxTitle dropdownBoxButton" onClick={this.ToggleContentVisibility.bind(this)}>Toggle Info <i class="arrow down"></i></button> 
                <div className="contentInBox hideContentInBox">
                  <h2>Description:</h2>
                  <div className="contentInBox">{exercise.Description}</div>

                  <h2>Form Tips:</h2>
                  <div className="contentInBox">{exercise.Form_Tips}</div>

                  <h2>Video Demonstration:</h2>
                  <div className="contentInBox"><iframe title="Video" width="420" height="315" src={exercise.Video} className="video"/></div>
                </div>
                
                
              </div>
            </div>  
          ))}
        </div>
      </div>
    );}
}
