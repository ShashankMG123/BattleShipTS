import { useState } from 'react';
import React from 'react';
import './Cell.css';
import { Rect } from 'react-konva';

const Cell = (props: any)  => {
    const [color, setColor] = useState("white");

    function changeColor() {
        if(color === "white")
            setColor("red")
        else
            setColor("white")
    }

    return (
        <Rect
            className="Cell"
            x={props.x}
            y={props.y}
            width={50}
            height={50}
            fill={color}
            shadowBlur={50}
            onClick={changeColor}
        />
    );
}

export default Cell;
