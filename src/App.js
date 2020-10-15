import React from 'react';
import './App.css';

function createPositions(number) {
  let positions = []
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '1', '2', '@', '#', '&', '?', '!', '%'];
  let numberSelectChars = (Math.random() * 15).toFixed(0);

  for (var i = 0; i < number; i++) {
    let typeChar = i;
    if(i%2 === 0) {
      numberSelectChars = (Math.random() * 15).toFixed(0);
    } else {
      typeChar = i - 1;
    }
    positions.push({ id: i, type: typeChar, title: chars[numberSelectChars] });
  }
  
  console.log(positions)
  return positions;
}

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

  createPositions(10)
 
  let positions = [
    {id: 1, type: 1, title: "e"},
    {id: 2, type: 1, title: "e"},
    {id: 3, type: 2, title: "s"},
    {id: 4, type: 2, title: "s"},
    {id: 5, type: 3, title: "a"},
    {id: 6, type: 3, title: "a"},
    {id: 7, type: 4, title: "f"},
    {id: 8, type: 4, title: "f"},
    {id: 9, type: 5, title: "w"},
    {id: 10, type: 5, title: "w"}];

  positions = shuffleArray(positions);

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
              if(node.dataset.type !== nodeSelected.dataset.type) {
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

  return (<div>{positions.map(position => (
    <div className="card" onClick={handleClick} data-type={position.type} key={position.id}>
      <div className="card__face card__face--front">{position.title}</div>
      <div className="card__face card__face--back">back</div>
    </div>
  ))}</div>);
}

export default App;
