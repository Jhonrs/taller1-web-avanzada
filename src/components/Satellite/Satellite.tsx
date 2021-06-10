import React from 'react';
import './Satellite.css';
interface SatelliteProps{
    satellite: boolean;
    satS: string;
    satelliteAmount: number;
    onIncreaseS: () => void;
    onDecreaseS: () => void;
    onChangeBooleanS: () => void;
}

export const Satellite: React.FC<SatelliteProps> = ({satellite, satS, satelliteAmount, onIncreaseS, onDecreaseS, onChangeBooleanS})=>{
return (  <div>
    <button onClick={onChangeBooleanS}>{satS}</button>
    <button onClick={onDecreaseS}>-</button>
    <p className="count">{satelliteAmount}</p>
    <button onClick={onIncreaseS}>+</button>
</div>);
}