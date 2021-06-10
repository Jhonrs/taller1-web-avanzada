import React from 'react';
import { TwitterPicker } from 'react-color';
import './ColorPicker.css';
interface ColorPickerProps {
    color1: string;
    color2: string;
    color3: string;
    colorR: string;
    colorS: string;
    colorI: string;
    onChangeColor1: (value: any) => void;
    onChangeColor2: (value: any) => void;
    onChangeColor3: (value: any) => void;
    onChangeColorR: (value: any) => void;
    onChangeColorS: (value: any) => void;
    onChangeColorI: (value: any) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color1, color2, color3, colorR, colorS, colorI, onChangeColor1, onChangeColor2, onChangeColor3, onChangeColorR, onChangeColorS, onChangeColorI }) => {
    return (
        <div className="container">
            <h2 className="title">Color planet</h2>
            <TwitterPicker color={color1} onChange={onChangeColor1} triangle="hide"></TwitterPicker>
            <TwitterPicker color={color2} onChange={onChangeColor2} triangle="hide"></TwitterPicker>
            <TwitterPicker color={color3} onChange={onChangeColor3} triangle="hide"></TwitterPicker>
            <h2 className="title">Color Ring</h2>
            <TwitterPicker color={colorR} onChange={onChangeColorR} triangle="hide"></TwitterPicker>
            <h2 className="title">Color Satellite</h2>
            <TwitterPicker color={colorS} onChange={onChangeColorS} triangle="hide"></TwitterPicker>
            <h2 className="title">Color Island</h2>
            <TwitterPicker color={colorI} onChange={onChangeColorI} triangle="hide"></TwitterPicker>
        </div>
    );
}