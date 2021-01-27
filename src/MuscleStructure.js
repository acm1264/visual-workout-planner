import { ReactComponent } from '*.svg';
import React from 'react';

export class MuscleStructure extends React.Component{
    MuscleOnClick = (muscleName) =>
    {
        alert(muscleName);
        console.log("clicked " + muscleName);
    }
    

};