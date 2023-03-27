import React, { FC, useState, FormEvent } from 'react';
import './TimeformStyles.scss';
import NumericInput from '../../common/NumericInput/NumericInput';
import Button from '../../common/Button/Button';
interface TimeFormProps{
  setReady:  React.Dispatch<React.SetStateAction<null | object>>
}

const Timeform : FC<TimeFormProps> = ({ setReady }) => {
  const [hold, setHold] = useState(0);
  const [rest, setRest] = useState(0);
  const [amountOfSet, setAmountOfSet] = useState(0);
 
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault()
   setReady({hold: hold, rest: rest, amountOfSet: amountOfSet});
  }

  return (
      <form onSubmit={(e) => onSubmit(e)}>
        <NumericInput id='number of sets' value={amountOfSet} onChange={(e) => setAmountOfSet(parseInt(e.target.value))}/>
        <NumericInput id='time of each hold' value={hold} onChange={(e) => setHold(parseInt(e.target.value))}/>
        <NumericInput id='time of rest' value={rest} onChange={(e) => setRest(parseInt(e.target.value))}/>
        <Button type="submit">Start</Button>
      </form>
  );
}

export default Timeform;
