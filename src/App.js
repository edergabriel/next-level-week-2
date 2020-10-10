import React from 'react';
import './App.css';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

function App() {

  let openCard = false;
  let validClick = 0;

  //(Math.random() * 5.99).toFixed(0)
  //a.splice(1,0, 222)
  
  let positions = [
    {id: 1, title: "e"},
    {id: 1, title: "e"},
    {id: 2, title: "s"},
    {id: 2, title: "s"},
    {id: 3, title: "a"},
    {id: 3, title: "a"}];

  positions = shuffleArray(positions);

  console.log(positions);

  function handleClick(e) {
    e.preventDefault();
    validClick = validClick + 1;

    if(validClick < 3) {
      e.currentTarget.classList.toggle('is-flipped');
      if(!openCard) {
        openCard = true;
      } else {
        let element = document.querySelectorAll('.card.is-flipped:not(.finded)');
        let nodeSelected = 0;
        setTimeout(function() {
          Array.prototype.forEach.call( element, function( node ) {
            if(nodeSelected === 0) {
              nodeSelected = node
            } else {
              if(node.id !== nodeSelected.id) {
                node.classList.remove('is-flipped')
                nodeSelected.classList.remove('is-flipped')
                console.log(node, nodeSelected)
              } else {
                node.classList.add('finded')
                nodeSelected.classList.add('finded')
              }
              nodeSelected = 0
            }

  

          });
          openCard = false;
          validClick = 0;
        }, 1000)
      }
    }
  }

  return (
  <div>
    <div className="card"   onClick={handleClick} id='3'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='2'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='2'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='1'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='3'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
    <div className="card" onClick={handleClick} id='1'>
      <div className="card__face card__face--front">front</div>
      <div className="card__face card__face--back">back</div>
    </div>
  </div>
  );
}

export default App;
