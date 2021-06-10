import React, { useEffect, useState } from 'react';
import './IslandP.css';

interface IslandProps{
    sizePlanet: number;
    colorIsland: string;
}

export const IslandP: React.FC<IslandProps> = ({sizePlanet, colorIsland}) => {

    const [randomNumber, setRandomNumber] = useState([(Math.random()*(0.8-0.2)+0.2),(Math.random()*(0.8-0.2)+0.2)]);

    const [ topI, setTopI] = useState(randomNumber[0]* sizePlanet);
    const [ leftI, setLeftI] = useState(randomNumber[1] * sizePlanet);

    useEffect(()=>{
        setTopI(randomNumber[0]* sizePlanet);
        setLeftI(randomNumber[1] * sizePlanet);
    },[sizePlanet]);

    return (
        <div className='IslandP' style={{top: topI+"px", left: leftI+"px", backgroundColor: colorIsland}}>


        </div>);
}