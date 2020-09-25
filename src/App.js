import React from 'react';
import './App.css';



function App() {
  
  /*function handleLogout($event) {
    console.log($event)
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }*/

  function handleClick(e) {
    console.log('this is:', e.target);
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }

  return (
  <div className="scene">
    <div className="card" onClick={handleClick} id='1'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='2'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
  </div>
  );
}

export default App;
