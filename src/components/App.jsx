import React, {useState} from 'react';

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function resetTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(resetTime, 1000);

  return(
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;