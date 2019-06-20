import React from 'react';
import Player from './Player';

const Game = (props) => {
    const playerListItems = props.gameData.map(player => (
        <Player
            key={player.id}
            player={player}
            updateScore={() => props.updateScore(player.id)}
        />
    ));

    return (
        <ul>
            {playerListItems}
        </ul>
    );
};

export default Game;