import React from 'react';
import './About.css';

//this file contains the top-level information about the app, including what the app is and 
//how to use it that is located at the top of the app
function About() {
  return (
    <div className="About">
        <div className="About-content">
          <h1>
            Visual Workout Planner
          </h1>
          <p>
            Do you want help planning your next workout? This visual workout planner allows you to select any combination of muscles on the front- and back-facing muscle structures below to view exercises targetting those muscle groups.  
          </p>
        </div>
    </div>
  );
}
// Memoization is for executing a function once, and then saving the result in memory. If the function is executed
// again with the same arguments as before, it will just return the previously saved result from the first function's execution without executing the function again
export const MemoizedAbout = React.memo(About);

export default About;