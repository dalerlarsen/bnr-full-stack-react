import React from 'react';
import './App.css';
import Game from './Game';

const AppHeader = () => <h1 className="app-header">Pongboard</h1>;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGame: [
                { id: 1, name: 'Player 1', score: 0 },
                { id: 2, name: 'Player 2', score: 0 },
            ]
        }
    }

    updateScore(playerId) {
        this.setState((previousState) => {
            const updatedGame = this.state.currentGame.map((player) => {
                if (player.id !== playerId) return player;
                return {
                    ...player,
                    score: player.score + 1,
                };
            });
            return { currentGame: updatedGame };
        });


        const updatedGame = this.state.currentGame.map((player) => {
            if (player.id !== playerId) return player;
            return {
                ...player,
                score: player.score + 1,
            }
        });
        this.setState({ currentGame: updatedGame });
    }

    render() {
        return (
            <div>
                <AppHeader />
                <Game
                    gameData={this.state.currentGame}
                    updateScore={(playerId) => this.updateScore(playerId)}
                />
            </div>
        );
    }
}

export default App;