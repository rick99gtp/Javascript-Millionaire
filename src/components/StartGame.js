// import { React } from 'react';
import './startgame.css';
import Winners from './Winners';
import imgTitle from '../title.png';
import Stats from './Stats';

function StartGame(props) {
    return (
        <div className='start-game'>
            <img src={imgTitle} alt="title"/>
            <Winners />
            <Stats gamesPlayed={props.gamesPlayed}/>
            <button onTransitionEnd={() => props.gameStateFlag()} onClick={() => props.animateElems()}>Start Game</button>
            <p className="created-by">Created by <a href="https://twitter.com/rick99gtp">@rick99gtp</a></p>
        </div>
    );
}

export default StartGame;