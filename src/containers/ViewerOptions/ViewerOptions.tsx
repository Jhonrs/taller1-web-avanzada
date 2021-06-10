import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Composition } from '../Composition/Composition';
import './ViewerOptions.css';

interface ViewerOptionsProps {
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
    paintPlanet: boolean;
    color1: string;
    color2: string;
    color3: string;
    paintIsland: boolean;
    colorIsland: string;
    paintRing: boolean;
    colorRing: string;
    paintSatellite: boolean;
    colorSatellite: string;
    onIncrease: () => void;
    onDecrease: () => void;
    onChangeBoolean: () => void;
    onIncreaseR: () => void;
    onDecreaseR: () => void;
    onChangeBooleanR: () => void;
    onIncreaseS: () => void;
    onDecreaseS: () => void;
    onChangeBooleanS: () => void;
    onSizeP: (value: any) => void;
    onSizeS: (value: any) => void;
    onChangeColor1: (value: any) => void;
    onChangeColor2: (value: any) => void;
    onChangeColor3: (value: any) => void;
    onChangeColorR: (value: any) => void;
    onChangeColorS: (value: any) => void;
    onChangeColorI: (value: any) => void;
}

export const ViewerOptions: React.FC<ViewerOptionsProps> = ({ island, islandS, islandAmount, ring, ringS, ringAcount, sizePlanet, satellite, satS, satelliteAmount, sizeSatellite, paintPlanet, color1, color2, color3, paintIsland, colorIsland, paintRing, colorRing, paintSatellite, colorSatellite, onIncrease, onDecrease, onChangeBoolean, onIncreaseR, onDecreaseR, onChangeBooleanR, onIncreaseS, onDecreaseS, onChangeBooleanS, onSizeP, onSizeS, onChangeColor1, onChangeColor2, onChangeColor3, onChangeColorR, onChangeColorS, onChangeColorI }) => {




    return (<div className="ViewerOptions">
        <div className="OptionsContainer">
            <nav className='navBar'>

                <Link to="/composition"> <a className='nav__options' href="">Composition</a></Link>
              
                <Link to="/color"><a className='nav__options' href="">Color</a></Link>
            </nav>

            <Route path="/composition" render={() => <Composition
                island={island}
                islandS={islandS}
                islandAmount={islandAmount}
                ring={ring}
                ringS={ringS}
                ringAcount={ringAcount}
                sizePlanet={sizePlanet}
                satellite={satellite}
                satS={satS}
                satelliteAmount={satelliteAmount}
                sizeSatellite={sizeSatellite}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onChangeBoolean={onChangeBoolean}
                onIncreaseR={onIncreaseR}
                onDecreaseR={onDecreaseR}
                onChangeBooleanR={onChangeBooleanR}
                onIncreaseS={onIncreaseS}
                onDecreaseS={onDecreaseS}
                onChangeBooleanS={onChangeBooleanS}
                onSizeP={onSizeP}
                onSizeS={onSizeS}
            >

            </Composition>} />
          
            <Route path="/color" render={() => <ColorPicker 
            color1={color1} 
            color2={color2} 
            color3={color3} 
            colorR={colorRing} 
            colorS={colorSatellite} 
            colorI={colorIsland} 
            onChangeColor1={onChangeColor1} 
            onChangeColor2={onChangeColor2} 
            onChangeColor3={onChangeColor3}
            onChangeColorR={onChangeColorR} 
            onChangeColorS={onChangeColorS} 
            onChangeColorI={onChangeColorI}>
            </ColorPicker>} />

        </div>
    </div>);
}
