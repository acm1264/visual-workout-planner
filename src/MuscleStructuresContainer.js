import './MuscleStructuresContainer.css';
import BackMuscleStructure from './BackMuscleStructure'
import FrontMuscleStructure from './FrontMuscleStructure'
import HeartMuscleStructure from './HeartMuscleStructure'



// export const MuscleOnClick = (muscleName) =>
// {
//     alert(muscleName);
//     console.log("clicked " + muscleName);
// }

//this file contains the setup for the muscle structures, including the SVG elements and clicking them
const MuscleStructuresContainer = () => 
{
  return (
    <div className="MuscleStructuresContainer">
            <FrontMuscleStructure />
            <HeartMuscleStructure />
            <BackMuscleStructure />
        
    </div>
  );
}

export default MuscleStructuresContainer;

