import React, {useState, useEffect} from 'react';
function DBAccess()
{
  //////////////////////////////placeholder test POST
  const [thought, setThought] = useState({ date: new Date().toISOString().split('T')[0], text: '' });
  
  const saveThought = async () => {
    const resp = await fetch('/api/add-shoulder-exercise', {
      method: 'POST',
      body: JSON.stringify(thought)
    });
    
    const { error, message } = await resp.json();
    error ? console.error(error) : console.log(message);
  }
  const handleThoughtChange = e => setThought({ ...thought, [e.target.name]: e.target.value});



  ////////////////////////////////placeholder test GET
  const [exercises, setExercises] = useState()

    const getExercises = async () => {
      const resp = await fetch('/api/get-muscle-ex-data')
      const data = await resp.json()
      setExercises(data)
    }
    const memCard = (m, i) => <div key={i}>{m.data.text}</div>
    const renderExercises = exercises ? exercises.map(memCard) : <button onClick={getExercises}>Show exercises</button>

    


  

  return (
    <div className="App">
      {/* placeholder test POST */}
      <h1>exercises</h1>
      <input type="date" name="date" value={thought.date} onChange={handleThoughtChange}/>
      <input type="text" name="text" placeholder="Your thought" value={thought.text} onChange={handleThoughtChange}/>
      <button onClick={saveThought}>Commit to memory</button>

      {/* placeholder test GET */}
      <div id="exercises">{ renderExercises }</div>
    </div>
  );
}
export default DBAccess;