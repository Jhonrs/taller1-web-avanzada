import React, { useState } from 'react';
import { Island } from '../../components/Island/Island';
import { Ring } from '../../components/Ring/Ring';
import { Satellite } from '../../components/Satellite/Satellite';
import './Composition.css';

interface CompositionProps{
    island: boolean;
    islandS: string;
    islandAmount: number;
    ring: boolean;
    ringS: string;
    ringAcount: number;
    sizePlanet: number;
    satellite: boolean;
    satS: string;
    satelliteAmount: number;
    sizeSatellite: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onChangeBoolean: () => void;
    onIncreaseR: () => void;
    onDecreaseR: () => void;
    onChangeBooleanR: () => void;
    onIncreaseS: () => void;
    onDecreaseS: () => void;
    onChangeBooleanS: () => void;
    onSizeP: (value: any)=> void;
    onSizeS: (value: any)=> void;
}

export const Composition: React.FC<CompositionProps> = ({island, islandS, islandAmount, ring, ringS, ringAcount, sizePlanet, satellite, satS, satelliteAmount, sizeSatellite, onIncrease, onDecrease, onChangeBoolean,onIncreaseR, onDecreaseR, onChangeBooleanR, onIncreaseS, onDecreaseS, onChangeBooleanS, onSizeP, onSizeS}) => {

    return(
        <div className="container">
            <p className="title">Island</p>
            <Island island={island} islandS={islandS} islandAmount={islandAmount} onIncrease={onIncrease} onDecrease={onDecrease} onChangeBoolean={onChangeBoolean}></Island>
            <p className="title">Rings</p>
            <Ring rings={ring}  ringS={ringS} ringsAmount={ringAcount} onIncreaseR={onIncreaseR} onDecreaseR={onDecreaseR} onChangeBooleanR={onChangeBooleanR}></Ring>
            <p className="title">Satellite</p>
            <Satellite satellite={satellite} satS={satS} satelliteAmount={satelliteAmount} onIncreaseS={onIncreaseS} onDecreaseS={onDecreaseS} onChangeBooleanS={onChangeBooleanS}></Satellite>
            <p className="title">Size Planet</p>
            <input className="sizeplanet" type="range"  min={55} max={350} onChange={onSizeP}/>
            <p className="title">Size Satellite</p>
            <input className="sizeSatellite" type="range" min={30} max={60} onChange={onSizeS}/>
        
        </div>
    );
}