import React, { FC, useState, FormEvent } from 'react';
import './TimeformStyles.scss';
import NumericInput from '../../common/NumericInput/NumericInput';
import Button from '../../common/Button/Button';
import { Counter } from '../LandingPage/LandingPage';
interface TimeFormProps{
  setCounter:  React.Dispatch<React.SetStateAction<Counter | null>>
}

const Timeform : FC<TimeFormProps> = ({ setCounter }) => {
  const [hold, setHold] = useState(0);
  const [rest, setRest] = useState(0);
  const [amountOfSet, setAmountOfSet] = useState(0);
 
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault()
   setCounter({hold: hold, rest: rest, amountOfSet: amountOfSet});
  }

  return (
      <form onSubmit={(e) => onSubmit(e)}>
        <NumericInput id='number of sets' min={1} value={amountOfSet} onChange={(e) => setAmountOfSet(parseInt(e.target.value))}/>
        <NumericInput id='time of each hold' min={1} value={hold} onChange={(e) => setHold(parseInt(e.target.value))}/>
        <NumericInput id='time of rest' min={1} value={rest} onChange={(e) => setRest(parseInt(e.target.value))}/>
        <Button type="submit">Start</Button>
      </form>
  );
}

export default Timeform;
