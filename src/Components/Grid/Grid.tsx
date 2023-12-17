import React, { ReactElement } from 'react';
import Cell from "../Cell/Cell"
import { Stage, Layer }  from 'react-konva';

function row(y:number): ReactElement {
  const n = []
  for(let i = 1; i < 15; i++)
    n.push(i*55)

  const res = n.map(x => 
      <Cell 
        x={x}
        y={y}
      />
    )
  
  return <div>{res}</div>

}

function grid(): ReactElement {
  const num = []
  for(let i = 1; i < 15; i++)
    num.push(i*55)

  const res = num.map(y => 
    row(y)
  )
  
  return <div>{res}</div>
}

function Grid() {
  return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
          {grid()}
      </Layer>
      </Stage>
  );
}

export default Grid;
