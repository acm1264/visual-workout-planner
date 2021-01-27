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

export default About;