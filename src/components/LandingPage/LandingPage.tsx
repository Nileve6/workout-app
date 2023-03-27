import React, { FC, useState } from 'react';
import Timeform from '../Form/Timeform';
import Workout from '../Workout/Workout';
import './LandingPageStyles.scss';


const LandingPage : FC = () => {
 const [ready, setReady] = useState<null | object>(null)

  return (
    <>
    <div>
      {ready ? <Workout ready={ready} /> :
        <Timeform setReady={setReady} />
      }
    </div>
    </>
  );
}

export default LandingPage;
