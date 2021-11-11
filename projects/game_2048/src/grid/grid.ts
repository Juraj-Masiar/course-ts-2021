type Direction = 'left' | 'right' | 'up' | 'down';

export interface Grid {
  width: number,
  height: number,
  data: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
  ],
}


export function moveGrid(grid: Grid, direction: Direction): Grid {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


  return {
    data: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    height: 0,
    width: 0,
  };
}

// moves numbers in a line in a single direction
export function moveNumbersLeft(line: number[]): number[] {

  return [0, 0, 0, 0];
}
