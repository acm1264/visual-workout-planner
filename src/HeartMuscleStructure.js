import React from "react";
import MuscleOnClick from './MuscleStructuresContainer';

//this component contains the conversion of our back-combined-muscle-strucutre.svg into a react component using https://svg2jsx.com/
//To simplify the process of making each svg muscle image line up correct on the website, we combined them all into a single file and
//converted it into one master component containing all the svg

// const MuscleOnClick = (muscleName) =>
// {
//     alert(muscleName);
//     console.log("clicked " + muscleName);
// }



function HeartMuscleStructure()
{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg1470"
          width="158.844"
          height="114.02"
          version="1.1"
          viewBox="0 0 42.028 30.168"
        >
          <g id="layer1" transform="translate(-53.415 -106.78)">
            <path
              id="path2109"
              fill="#fff"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeOpacity="1"
              strokeWidth="0.24"
              d="M69.732 108.212c-1.436-.571-2.796-.951-3.873-1.142-1.077-.19-1.87-.19-2.852-.148-.983.043-2.154.127-3.028.418-.874.29-1.28.639-1.94 1.104-.662.465-1.493.972-2.192 1.564a7.156 7.156 0 00-1.681 2.028c-.416.761-.68 1.607-.624 2.853.057 1.247.435 2.896 1.134 4.48.699 1.585 1.719 3.107 3.004 4.586 1.284 1.48 2.833 2.916 4.307 4.248 1.473 1.33 2.87 2.557 4.477 3.824 1.605 1.268 3.419 2.579 4.76 3.55 1.341.973 2.21 1.607 3.872 1.036 1.663-.57 4.118-2.346 6.196-4.015 2.078-1.67 3.778-3.233 5.516-4.903 1.738-1.67 3.514-3.444 4.742-4.839 1.227-1.395 1.908-2.41 2.493-3.72.586-1.31 1.077-2.915 1.228-4.247.151-1.33-.038-2.387-.453-3.233-.416-.845-1.058-1.48-2.002-2.092-.945-.613-2.192-1.205-3.42-1.648-1.227-.444-2.436-.74-3.664-.782-1.228-.043-2.475.169-3.684.465-1.209.295-2.38.676-3.59 1.056-1.208.38-2.455.76-3.173 1.036-.718.274-.907.443-1.757.148-.85-.296-2.36-1.057-3.796-1.627z"
            ></path>
          </g>
        </svg>
      );
}

export default HeartMuscleStructure;