import React, { FC, useState, FormEvent, useId, useCallback } from "react";
import "./TimeformStyles.scss";
import NumericInput from "../../common/NumericInput/NumericInput";
import Button from "../../common/Button/Button";
import { Counter } from "../../model";
interface TimeFormProps {
  setCounter: React.Dispatch<React.SetStateAction<Counter | null>>;
}

const Timeform: FC<TimeFormProps> = ({ setCounter }) => {
  const [hold, setHold] = useState(0);
  const [rest, setRest] = useState(0);
  const [numberOfSets, setnumberOfSets] = useState(0);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setCounter({ hold: hold, rest: rest, numberOfSets });
    },
    [hold, numberOfSets, rest, setCounter]
  );

  const onSubmitHandler = useCallback(
    () => (e: FormEvent<HTMLFormElement>) => onSubmit(e),
    [onSubmit]
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <NumericInput
        id={useId()}
        label="number of sets"
        min={1}
        value={numberOfSets}
        onChange={(e) => setnumberOfSets(parseInt(e.target.value))}
      />
      <NumericInput
        id={useId()}
        label="time of each hold"
        min={1}
        value={hold}
        onChange={(e) => setHold(parseInt(e.target.value))}
      />
      <NumericInput
        id={useId()}
        label="time of rest"
        min={1}
        value={rest}
        onChange={(e) => setRest(parseInt(e.target.value))}
      />
      <Button type="submit">Start</Button>
    </form>
  );
};

export default Timeform;
