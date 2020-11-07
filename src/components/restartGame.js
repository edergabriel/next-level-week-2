import React from 'react'

export default function restartGame({touches}) {
    return (  
    <div class="modal">
        Congratulations!
        Your Record: {touches} touches
        <button>New Game</button>
    </div>
    )
}