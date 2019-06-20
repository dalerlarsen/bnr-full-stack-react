import React from 'react';
import './App.css';
import Game from './Game';

const currentGame = [
    { id: 1, name: 'Player 1', score: 0 },
    { id: 2, name: 'Player 2', score: 0 },
]

const AppHeader = () => <h1 className="app-header">Pongboard</h1>;

const App = () => {
    return (
        <div>
            <AppHeader />
            <Game 
                gameData={currentGame} 
                updateScore={() => console.log('Click passed to App component')}
            />
        </div>
    );
};

export default App;