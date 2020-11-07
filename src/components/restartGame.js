import React from 'react'

export default function restartGame({onNewGame = () => {}, touches}) {
    return (  
    <div class="modal">
        <div class="container">
            <h2>Congratulations!</h2>
            <p>You did {touches} touches.</p>

            <button onClick={onNewGame}>Again</button>
        </div>
    </div>
    )
}