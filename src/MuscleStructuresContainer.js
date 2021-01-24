import './MuscleStructuresContainer.css';
import BackMuscleStructure from './BackMuscleStructure'

export const MuscleOnClick = (muscleName) =>
{
    alert(muscleName);
    console.log("clicked " + muscleName);
}

//this file contains the setup for the muscle structures, including the SVG elements and clicking them
const MuscleStructuresContainer = () => 
{
  return (
    <div className="MuscleStructuresContainer">
        <h1>
            Muscle Structures
            <BackMuscleStructure />
        </h1>
    </div>
  );
}

export default MuscleStructuresContainer;

