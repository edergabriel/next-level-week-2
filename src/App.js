import React from 'react';
import './App.css';



function App() {

  let openCard = false;
  
  function handleClick(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle('is-flipped');
    if(openCard) {
      openCard = true;
    } else {
      
    }

  }

  return (
  <div>
    <div className="card" onClick={handleClick} id='1'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='2'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='3'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='4'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
  </div>
  );
}

export default App;
