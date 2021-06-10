import React from 'react';
import './Viewer.css';
import { ViewerOptions } from '../ViewerOptions/ViewerOptions';
import { ViewerPlanet } from '../ViewerPlanet/ViewerPlanet';

interface ViewerProps {

}
const initialPlanet = [
    {
        island: false,
        islandS: "No",
        islandAmount: 0,
        name: "string",
        ring: false,
        ringS: "No",
        ringAcount: 0,
        sizePlanet: 0,
        satellite: false,
        satS: "No",
        satelliteAmount: 0,
        sizeSatellite: 0,
        paintPlanet: false,
        colorPlanet: 0,
        paintIsland: false,
        colorIsland: 0,
        paintRing: false,
        colorRing: 0,
        paintSatellite: false,
        colorSatellite: 0,
    }
];


export const Viewer = () => {

    const [planets, setPlanets] = React.useState(initialPlanet);


    const [islandAmount, setIslandAmount] = React.useState(0);
    const [ringAcounts, setringsCount] = React.useState(0);
    const [satAcounts, setSatAcounts] = React.useState(0);
    const [islan, setIsland] = React.useState(false);
    const [rin, setRin] = React.useState(false);
    const [sat, setSat] = React.useState(false);

    const handleIncreaseIsland = () => {


        if (islan === true) {
            setIslandAmount(islandAmount + 1);
            setTopI(Math.random() * 500);
            setLeftI(Math.random() * 500);
            if (islandAmount === 10) {
                setIslandAmount(10);
            }
        }

    };

    const handleDecreaseIsland = () => {

        if (islan === true) {

            setIslandAmount(islandAmount - 1);
            if (islandAmount === 0) {
                setIslandAmount(0);
            }
        }
    };


    const handleCurrentPlanet = () => {
        const newCurrentPlanet = {
            name: "string",
            island: islan,
            islandS: "No",
            islandAmount: islandAmount,
            ring: rin,
            ringS: "No",
            ringAcount: ringAcounts,
            sizePlanet: 0,
            satellite: sat,
            satS: "No",
            satelliteAmount: satAcounts,
            sizeSatellite: 0,
            paintPlanet: false,
            colorPlanet: 0,
            paintIsland: false,
            colorIsland: 0,
            paintRing: false,
            colorRing: 0,
            paintSatellite: false,
            colorSatellite: 0,
        }
        var tempPlanet = [];
        tempPlanet.push(newCurrentPlanet);
        setPlanets(tempPlanet);

    }

    React.useEffect(() => {
        handleCurrentPlanet();
    }, [islan, islandAmount, rin, ringAcounts, sat, satAcounts]);



    const handleIncreaseR = () => {
        if (rin === true) {
            setringsCount(ringAcounts + 1);
        }
    }

    const handleDecreaseR = () => {

        if (rin === true) {

            setringsCount(ringAcounts - 1);
            if (ringAcounts === 0) {
                setringsCount(0);
            }
        }
    }

    const handleIncreaseS = () => {
        if (sat === true) {
            setSatAcounts(satAcounts + 1);
        }
    }

    const handleDecreaseS = () => {
        if (sat === true) {
            setSatAcounts(satAcounts - 1);
            if (satAcounts === 0) {
                setSatAcounts(0);
            }
        }
    }



    const [avalible, setAvalible] = React.useState("No");
    const [avalibleR, setAvalibleR] = React.useState("No");
    const [avalibleS, setAvalibleS] = React.useState("No");
    const handleChangBoolean = () => {


        if (islan) {
            setIsland(false);
            setAvalible("No");
            setIslandAmount(0);
        } else {
            setIsland(true);
            setAvalible("Yes");
            setIslandAmount(1);

        };

        console.log(initialPlanet);
    }

    const handleChangBooleanR = () => {


        if (rin) {
            setRin(false);
            setAvalibleR("No");
            setringsCount(0);
        } else {
            setRin(true);
            setAvalibleR("Yes");
            setringsCount(1);
        };

        console.log(initialPlanet);
    }

    const handleChangBooleanS = () => {


        if (sat) {
            setSat(false);
            setAvalibleS("No");
            setSatAcounts(0);
        } else {
            setSat(true);
            setAvalibleS("Yes");
            setSatAcounts(1);
        };

        console.log(initialPlanet);
    }

    const [sizeP, setSizeP] = React.useState(100);
    const handlePlanetSize: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSizeP(parseInt(event.target.value));
    }

    const [sizeS, setSizeS] = React.useState(30);
    const handleSatelliteSize: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSizeS(parseInt(event.target.value));
    }

    const [topI, setTopI] = React.useState(Math.random() * sizeP);
    const [leftI, setLeftI] = React.useState(Math.random() * sizeP);
    const [topS, setTopS] = React.useState(Math.random() * 500);
    const [leftS, setleftS] = React.useState(Math.random() * 500);

    const [ name, setText ] = React.useState("Planet name");
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setText(event.target.value);
    }

    const [color1, setColor1] = React.useState("#FD5F6E");
    const [color2, setColor2] = React.useState("#B440A1");
    const [color3, setColor3] = React.useState("#FF2796");
    const [colorR, setColorR] = React.useState("#B440A1");
    const [colorS, setColorS] = React.useState("#FD5F6E");
    const [colorI, setColorI] = React.useState("#FG2796");

function handleChangeColor1(color: any) {
    setColor1(color.hex);
}
function handleChangeColor2(color: any) {
    setColor2(color.hex);
}
function handleChangeColor3(color: any) {
    setColor3(color.hex);
}

function handleChangeColorR(color: any) {
    setColorR(color.hex);
}
function handleChangeColorS(color: any) {
    setColorS(color.hex);
}
function handleChangeColorI(color: any) {
    setColorI(color.hex);
}
    return (<div className='Viewer'>


        <ViewerPlanet
            name={name}
            island={islan}
            islandS={avalible}
            islandAmount={islandAmount}
            leftI={leftI}
            topI={topI}
            ring={rin}
            ringS={avalibleR}
            ringAcount={ringAcounts}
            sizePlanet={sizeP}
            satellite={sat}
            satS={avalibleS}
            satelliteAmount={satAcounts}
            leftS={leftS}
            topS={topS}
            sizeSatellite={sizeS}
            paintPlanet={false}
            color1={color1}
            color2={color2}
            color3={color3}
            paintIsland={false}
            colorIsland={colorI}
            paintRing={false}
            colorRing={colorR}
            paintSatellite={false}
            colorSatellite={colorS}
            onTextChange={handleTextChange}
        >
        </ViewerPlanet>

        <ViewerOptions
            island={islan}
            islandS={avalible}
            islandAmount={islandAmount}
            ring={rin}
            ringS={avalibleR}
            ringAcount={ringAcounts}
            sizePlanet={sizeP}
            satellite={sat}
            satS={avalibleS}
            satelliteAmount={satAcounts}
            sizeSatellite={sizeS}
            paintPlanet={false}
            color1={color1}
            color2={color2}
            color3={color3}
            paintIsland={false}
            colorIsland={colorI}
            paintRing={false}
            colorRing={colorR}
            paintSatellite={false}
            colorSatellite={colorS}
            onIncrease={handleIncreaseIsland}
            onDecrease={handleDecreaseIsland}
            onChangeBoolean={handleChangBoolean}
            onIncreaseR={handleIncreaseR}
            onDecreaseR={handleDecreaseR}
            onChangeBooleanR={handleChangBooleanR}
            onIncreaseS={handleIncreaseS}
            onDecreaseS={handleDecreaseS}
            onChangeBooleanS={handleChangBooleanS}
            onSizeP={handlePlanetSize}
            onSizeS={handleSatelliteSize}
            onChangeColor1={handleChangeColor1} 
            onChangeColor2={handleChangeColor2} 
            onChangeColor3={handleChangeColor3}
            onChangeColorR={handleChangeColorR} 
            onChangeColorS={handleChangeColorS} 
            onChangeColorI={handleChangeColorI}
        >
        </ViewerOptions>
    </div>);
}
