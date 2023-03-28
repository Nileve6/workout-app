import React, { FC, useState } from 'react';
import ExerciseTimer from '../ExersiceTimer/ExerciseTimer';
import Timeform from '../Form/Timeform';
import './LandingPageStyles.scss';

export interface Counter{
  hold: number,
  rest: number,
  amountOfSet: number,
}

const LandingPage : FC = () => {
 const [counter, setCounter] = useState<Counter | null>(null)

  return (
    <div>
      {counter ? <ExerciseTimer counter={counter} /> :
        <Timeform setCounter={setCounter}/>
      }
    </div>
  );
}

export default LandingPage;
