import { FunctionComponent, useState } from "react";
import ExerciseTimer from "../ExersiceTimer/ExerciseTimer";
import Timeform from "../Form/Timeform";
import { Counter } from "../../model";

const LandingPage: FunctionComponent = () => {
  const [counter, setCounter] = useState<Counter | null>(null);

  return (
    <>
      {counter ? (
        <ExerciseTimer counter={counter} />
      ) : (
        <Timeform setCounter={setCounter} />
      )}
    </>
  );
};

export default LandingPage;
