import React from 'react';
import './App.css';



function App() {

  let openCard = false;
  let validClick = 0;
  
  function handleClick(e) {
    e.preventDefault();
    validClick = validClick + 1;

    if(validClick < 3) {
      e.currentTarget.classList.toggle('is-flipped');
      if(!openCard) {
        openCard = true;
      } else {
        let element = document.querySelectorAll('.card.is-flipped:not(finded)');
        let nodeSelected = 0;
        setTimeout(function() {
          Array.prototype.forEach.call( element, function( node ) {
            //node.parentNode.removeChild( node );
            console.log(node.id, nodeSelected, node.parentNode)

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
