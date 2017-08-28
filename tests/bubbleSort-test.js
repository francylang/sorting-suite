import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should sort 2 numbers in an array from least to greatest', () => {
    let array = [ 2, 1 ]

    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  })

  it('should sort 5 numbers in an array from least to greatest', () => {
    let array = [ 5, 3, 4, 2, 1 ]

    assert.equal(array[0] > array[1], true);
    bubbleSort(array);
    assert.equal(array[0] < array[1], true);
  })




})
