import React, { FC } from 'react';
import './TimerStyles.scss';
import { VscDebugStart } from 'react-icons/vsc';
import { MdOutlinePause } from 'react-icons/md';
import Button from '../../common/Button/Button';

interface TimerProps{
    hold?: number,
    rest?: number,
}

const Timer : FC<TimerProps> = ({ hold, rest }) => {
  return (
    <section>
        <h1>time remaining</h1>
        <p className='counter'>{hold}</p>
        <p>seconds</p>
        <div className='button-container'>
            <Button>
                <VscDebugStart size={30}/>
            </Button>
            <Button>
                <MdOutlinePause size={30}/>
            </Button>
        </div>
    </section>
  );
}

export default Timer;
