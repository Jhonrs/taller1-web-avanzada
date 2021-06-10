import React from 'react';
import './SatelliteP.css';

interface SatellitePProps{
    sizeSatellite: number;
    sizePlanet: number;
    colorSatellite: string;
   
}

export const SatelliteP: React.FC<SatellitePProps> = ({sizeSatellite, sizePlanet, colorSatellite})=>{

    const [randomNumber, setRandomNumber] = React.useState([Math.random(),Math.random()]);

    const [ topS, setTopS] = React.useState(randomNumber[0]* (sizePlanet+300));
    const [ leftS, setLeftS] = React.useState(randomNumber[1] *(sizePlanet+300));

    React.useEffect(()=>{
        setTopS(randomNumber[0]* (sizePlanet+300));
        setLeftS(randomNumber[1] * (sizePlanet+300));
    },[sizePlanet]);

  

    return (
        <div className='SatelliteP' style={{width: `${sizeSatellite}px`, height: `${sizeSatellite}px`, top: `${topS}px`, left: `${leftS}px`, backgroundColor: colorSatellite}}>


        </div>);
}