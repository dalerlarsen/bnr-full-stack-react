import React from 'react';

const Player = (props) => {
    return (
        <li>
            <span className="player-score">{props.player.score}</span>
            <span className="player-name">{props.player.name}</span>
            <button onClick={props.updateScore}>+</button>
        </li>
    )
}

export default Player;