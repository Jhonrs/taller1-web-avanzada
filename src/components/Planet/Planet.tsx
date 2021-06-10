import React from "react";
import { HashRouter } from "react-router-dom";
import { ImportsNotUsedAsValues } from "typescript";
import { IslandP } from "../IslandP/IslandP";
import { SatelliteP } from "../SatelliteP/SatelliteP";
import './Planet.css';

interface PlanetProps {
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
}

export const Planet: React.FC<PlanetProps> = ({ island, islandS, topI, leftI, islandAmount, name, ring, ringS,
    ringAcount,  sizePlanet, satellite, satS, topS, leftS, satelliteAmount, sizeSatellite, paintPlanet, color1, color2, color3, paintIsland, colorIsland, paintRing, colorRing, paintSatellite, colorSatellite }) => {

    var isla = [];

    for (let i = 0; i < islandAmount; i++) {
        var newIsla = i;
        isla.push(newIsla);

    }

    var anillo = [];

    for (let i = 0; i < ringAcount; i++) {
        var newAnillo = i;
        anillo.push(newAnillo);

    }

    var satelite = [];

    for (let i = 0; i < satelliteAmount; i++) {
        var newSatelite = i;
        satelite.push(newSatelite);

    }

    return (
        <div className="container__planet">
            <div className="body__planet" style={{ width: sizePlanet + "px", height: sizePlanet + "px" }}>
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 450 450"
                >
                    <g>
                        <path
                            style={{ fill: color1 }}
                            d="M427.822,127.473h-31.321v195.055h31.321C442.035,293.023,450,259.942,450,225
                    S442.035,156.977,427.822,127.473z"
                        />
                        <path
                            style={{ fill: color2 }}
                            d="M372.772,340.375l-66.51,86.15l36.852-10c22.797-14.089,42.893-32.128,59.325-53.171
                    L372.772,340.375z"
                        />
                        <path
                            style={{ fill: color1 }}
                            d="M326.261,413.314L225,450c43.324,0,83.781-12.257,118.113-33.475
                    C337.332,415.526,331.719,414.452,326.261,413.314z"
                        />
                        <path
                            style={{ fill: color2 }}
                            d="M225,0l147.772,109.625l29.667-22.979C361.26,33.911,297.093,0,225,0z"
                        />
                        <path
                            style={{ fill: color1 }}
                            d="M396.501,140.513C368.554,158.245,350,189.452,350,225s18.554,66.755,46.501,84.487
                    C405.198,283.399,410,254.883,410,225C410,195.117,405.198,166.601,396.501,140.513z"
                        />
                        <path
                            style={{ fill: color3 }}
                            d="M402.438,86.646c-10.421,0.756-20.283,1.762-29.667,2.979v25.444l23.729,25.444
                    c9.479-6.015,20.036-10.485,31.321-13.04C420.813,112.924,412.28,99.249,402.438,86.646z"
                        />
                        <path
                            style={{ fill: color3 }}
                            d="M396.501,309.487l-23.729,25.444v25.444c9.384,1.217,19.245,2.223,29.667,2.979
                    c9.841-12.604,18.375-26.278,25.383-40.827C416.537,319.972,405.98,315.502,396.501,309.487z"
                        />
                        <path
                            style={{ fill: color3 }}
                            d="M350,225c0-35.548,18.554-66.755,46.501-84.487c-6.094-18.281-14.102-35.367-23.729-50.888h-100
                    L3.549,184.988C1.219,197.973,0,211.344,0,225s1.219,27.027,3.549,40.012l269.222,95.363h100
                    c9.628-15.521,17.635-32.607,23.729-50.888C368.554,291.755,350,260.548,350,225z"
                        />
                        <path
                            style={{ fill: color2 }}
                            d="M225,0c-32.21,0-62.832,6.783-90.536,18.975l-115.49,115.49
                    c-7.023,15.958-12.259,32.881-15.425,50.524c192.545-0.912,218.593-75.822,369.222-95.363C339.006,35.192,285.385,0,225,0z"
                        />
                        <path
                            style={{ fill: color1 }}
                            d="M106.612,106.612c23.848-23.848,33.131-56.743,27.853-87.637
                    c-51.471,22.652-92.838,64.018-115.49,115.49C49.868,139.742,82.764,130.459,106.612,106.612z"
                        />
                        <path
                            style={{ fill: color2 }}
                            d="M3.549,265.012c3.829,21.332,10.676,41.613,20.064,60.404l177.019,87.898h125.629
                    c17.902-14.268,33.648-32.203,46.51-52.939C222.142,340.834,196.094,265.924,3.549,265.012z"
                        />
                        <path
                            style={{ fill: color1 }}
                            d="M200.632,369.829c-49.663-22.072-93.117-41.379-177.019-44.412C60.512,399.272,136.826,450,225,450
                    c37.382,0,72.167-13.498,101.261-36.686C273.924,402.398,235.853,385.482,200.632,369.829z"
                        />
                        <circle style={{ fill: color1 }} cx="293.592" cy="271.293" r="7.5" />
                        <circle style={{ fill: color1 }} cx="263.592" cy="241.293" r="7.5" />
                        <circle style={{ fill: color1 }} cx="296.753" cy="51.773" r="7.5" />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
                {isla.map(function () { return <IslandP sizePlanet={sizePlanet} colorIsland={colorIsland}></IslandP> })}
            </div>
            {anillo.map(function(ringT,index){return  <div className="planet__ring" style={{"--ringRotate":(index*15)+"deg", backgroundColor: colorRing} as React.CSSProperties} ></div>})}
            {satelite.map(function () { return <SatelliteP sizePlanet={sizePlanet} sizeSatellite={sizeSatellite}  colorSatellite={colorSatellite}></SatelliteP> })}
        </div>
    );
}
