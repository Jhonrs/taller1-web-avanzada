import React from 'react';
import { Island } from '../../components/Island/Island';
import { Planet } from '../../components/Planet/Planet';
import './ViewerPlanet.css';

interface ViewerPlanetProps {
  name: string;
  island: boolean;
  islandS: string;
  topI: number;
  leftI: number;
  islandAmount: number;
  ring: boolean;
  ringS: string;
  ringAcount: number;
  sizePlanet: number;
  satellite: boolean;
  satS: string;
  topS: number;
  leftS: number;
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
  onTextChange: (value: any) => void;
}

export const ViewerPlanet: React.FC<ViewerPlanetProps> = ({ island, islandS, islandAmount, leftI, topI, leftS, topS, name, ring, ringS, ringAcount, sizePlanet, satellite, satS, satelliteAmount, sizeSatellite, paintPlanet, color1, color2, color3, paintIsland, colorIsland, paintRing, colorRing, paintSatellite, colorSatellite, onTextChange }) => {
  return (<div className='ViewerPlanet'>
    <input className='TextViewerP' value={name} onChange={onTextChange} />

    <Planet
      island={island}
      islandS={islandS}
      islandAmount={islandAmount}
      leftI={leftI}
      topI={topI}
      name={name}
      ring={ring}
      ringS={ringS}
      ringAcount={ringAcount}
      sizePlanet={sizePlanet}
      satellite={satellite}
      satS={satS}
      topS={topS}
      leftS={leftS}
      satelliteAmount={satelliteAmount}
      sizeSatellite={sizeSatellite}
      paintPlanet={paintPlanet}
      color1={color1}
      color2={color2}
      color3={color3}
      paintIsland={paintIsland}
      colorIsland={colorIsland}
      paintRing={paintRing}
      colorRing={colorRing}
      paintSatellite={paintSatellite}
      colorSatellite={colorSatellite}></Planet>

  </div>);
}