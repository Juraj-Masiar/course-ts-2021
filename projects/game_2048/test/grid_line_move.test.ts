import {moveNumbersLeft} from '../src/grid/grid';

test('move numbers LEFT in a line', () => {

  const inputLine =     [2, 2, 2, 0];
  const expectedLine =  [4, 2, 0, 0];

  const result = moveNumbersLeft(inputLine);

  expect(result).toEqual(expectedLine);
})
