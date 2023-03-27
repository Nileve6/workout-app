import React, { FC } from 'react';
import Button from '../../common/Button/Button';
import Timer from '../Timer/Timer';
import './WorkoutStyles.scss';

interface WorkoutProps{
    ready: {
        hold?: number,
        rest?: number,
        amountOfSet?: number,
    }
}
        //timer holddal + gombokkal
        //timer rest + gombok
        // mindez annyiszor ahány set van
const Workout : FC<WorkoutProps> = ({ ready }) => {
  console.log(ready)
  const {hold, rest, amountOfSet} = ready;

  const resetHandler = () => {

  }
  return (
    <section>
        <Timer hold={hold} rest={rest} />
        <p>sets remaining {amountOfSet}</p>
        <Button onClick={resetHandler}>Reset</Button>
    </section>
  );
}

export default Workout;
