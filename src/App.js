import React from 'react';
import './App.css';

function App() {
  
  function handleLogout() {
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }

  return (
  <div class="scene">
    <div class="card" onClick={handleLogout}>
      <div class="card__face card__face--front">front</div>
      <div class="card__face card__face--back">back</div>
    </div>
  </div>
  );
}

export default App;
