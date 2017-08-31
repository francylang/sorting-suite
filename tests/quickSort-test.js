import { assert } from 'chai';
import quickSort from '../scripts/quickSort';
import genRandomNumberArray from '../scripts/genRanArray'

describe('quickSort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort);
  })
  it('should sort an array of numbers', () => {
    let array = [4, 2, 5, 1, 3];

    assert.deepEqual(array, [4, 2, 5, 1, 3]);
    assert.deepEqual(quickSort(array), [1, 2, 3, 4, 5] );
  })

  it('should sort a large array of numbers', () => {
    let array = genRandomNumberArray(1320);

    assert.equal(quickSort(array)[0] <= quickSort(array)[1], true)
  })

  it('should sort an array containing negative numbers', () => {
    let array = [-3, -5, -1, -2, -4];

    assert.deepEqual(array, [-3, -5, -1, -2, -4])
    assert.deepEqual(quickSort(array) [-5, -4, -3, -2, -1])
  })

  it('should sort a large array of negative numbers', () => {
    let array = genRandomNumberArray(1000, -1000);

    assert.equal(quickSort(array)[0] <= quickSort(array)[1], true)
  })
})

export default quickSort
