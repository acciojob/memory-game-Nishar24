
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <div class="game-container">
        <h1>Memory Matching Game</h1>
        
        <div class="levels-container">
            <h2>Select Difficulty:</h2>
            <div class="level-buttons">
                <button id="easy">Easy (4 pairs)</button>
                <button id="normal">Normal (8 pairs)</button>
                <button id="hard">Hard (16 pairs)</button>
            </div>
        </div>
        
        <div class="game-info">
            <p>Attempts: <span id="attempts">0</span></p>
            <p>Matches: <span id="matches">0</span></p>
        </div>
        
        <div class="cells-container" id="game-board"></div>
        
        <div class="game-over hidden" id="game-over">
            <h2>Congratulations!</h2>
            <p>You completed the game in <span id="final-attempts">0</span> attempts!</p>
            <button id="play-again">Play Again</button>
        </div>
    </div>
    </div>
  )
}

export default App
