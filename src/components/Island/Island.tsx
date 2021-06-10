import React, { useState } from 'react';
import './Island.css';

interface IslandProps {
    island: boolean;
    islandS: string;
    islandAmount: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onChangeBoolean: () => void;

}

export const Island: React.FC<IslandProps> = ({ island, islandS, islandAmount, onIncrease, onDecrease, onChangeBoolean }) => {

    
    return (
        <div>
            <button onClick={onChangeBoolean}>{islandS}</button>
            <button onClick={onDecrease}>-</button>
           <p className="count">{islandAmount}</p> 
            <button onClick={onIncrease}>+</button>
        </div>
    );
}