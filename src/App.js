import React, { useState } from 'react';
import './App.css';

function checkValue(number) {
  removeChars.filter(function(element, index, array) {
    console.log(index, removeChars[index], number)
    if(removeChars[index] === number) {
      numberSelectChars = checkValue(Math.abs(Math.round(Math.random() * chars.length)))
    } 
    return numberSelectChars
  })
  return number
}

function createPositions(number) {
  let positions = []


  for (var i = 0; i < number; i++) {
    let typeChar = i;
    let selectedChar;
    if(i%2 === 0) {
      numberSelectChars = Math.abs(Math.round(Math.random() * chars.length));
      checkValue(numberSelectChars)
      //console.log(numberSelectChars)
      //chars.splice(numberSelectChars, 1)
    } else {
      typeChar = i - 1;
      removeChars.push(numberSelectChars)
    }
    selectedChar = chars[numberSelectChars] 

    //console.log("selectedChar: ", selectedChar)
    positions.push({ id: i, type: typeChar, title: selectedChar});
  }
  //console.log("CreatePositions: ", positions, removeChars, chars)
  return positions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '1', '2', '@', '#', '&', '?', '!', '%', 'W'];
let removeChars = []
let numberSelectChars;
let openCard = false;
let validClick = 0; 
let positions = createPositions(30);
positions = shuffleArray(positions);

function App() {

  const [numberTouches, setNumberTouches] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    setNumberTouches(numberTouches + 1)

    if(validClick < 3 && e.currentTarget.classList.value.indexOf('finded') < 0) {
      validClick = validClick + 1;
      console.log(e.currentTarget.classList);
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
              console.log(node, nodeSelected)
              if(node.dataset.type !== nodeSelected.dataset.type) {
                node.classList.remove('is-flipped')
                nodeSelected.classList.remove('is-flipped')
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
      <div className="card__face card__face--back"><div></div></div>
    </div>
  ))} <div class="hud">Touches: {numberTouches}</div> </div>);
}

export default App;
