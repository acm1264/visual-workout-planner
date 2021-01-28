import React from 'react';

export class MuscleStructure extends React.Component{
    MuscleOnClick = (muscleName) =>
    {
        alert(muscleName);
        console.log("clicked " + muscleName);
    };    
};
export default MuscleStructure;