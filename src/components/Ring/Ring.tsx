import React from 'react';
import './Ring.css';
interface RingProps {
    rings: boolean;
    ringS: string;
    ringsAmount: number;
    onIncreaseR: () => void;
    onDecreaseR: () => void;
    onChangeBooleanR: () => void;
}

export const Ring: React.FC<RingProps> = ({ rings, ringS, ringsAmount, onDecreaseR, onIncreaseR, onChangeBooleanR }) => {
    return (<div>
        <button onClick={onChangeBooleanR}>{ringS}</button>
        <button onClick={onDecreaseR}>-</button>
        <p className="count">{ringsAmount}</p>
        <button onClick={onIncreaseR}>+</button>
    </div>);
}