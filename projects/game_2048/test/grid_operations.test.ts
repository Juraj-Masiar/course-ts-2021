import {Grid, moveGrid} from '../src/grid/grid';

test('move numbers right', () => {

  const inputGrid: Grid = {
    data: [
      [0, 2, 2, 0],
      [0, 8, 2, 0],
      [0, 0, 0, 0],
      [4, 4, 4, 4],
    ],
    height: 0,
    width: 0
  };
  const result = moveGrid(inputGrid, 'right');

  const expectedGrid: Grid = {
    data: [
      [0, 0, 0, 4],
      [0, 0, 8, 2],
      [0, 0, 0, 0],
      [0, 0, 8, 8],
    ],
    height: 0,
    width: 0
  };

  expect(result).toEqual(expectedGrid);
})
