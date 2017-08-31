import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';
import genRandomNumberArray from '../scripts/genRanArray'

describe('TDD with insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort 2 numbers in an array from least to greatest', () => {
    let array = [ 2, 1 ]

    assert.equal(array[0] > array[1], true);
    insertionSort(array);
    assert.equal(array[0] < array[1], true);
  })

  it('should sort 5 numbers in an array from least to greatest', () => {
    let array = [ 5, 3, 4, 2, 1 ]

    assert.equal(array[0] > array[1], true);
    insertionSort(array);
    assert.equal(array[0] < array[1], true);
  })

  it('should sort large numbers', () => {
    let array = [ 500, 343, 234, 342, 221 ]

    assert.equal(array[0] > array[1], true);
    insertionSort(array);
    assert.equal(array[0] < array[1], true);
  })


  it('should sort a random array', () => {
    let newArray = genRandomNumberArray(1000)

    insertionSort(newArray);
    assert.equal(newArray[0] <= newArray[1], true)
    assert.equal(newArray[Math.floor(newArray.length / 2)] <= newArray[Math.floor(newArray.length / 2) + 1], true)
    assert.equal(newArray[newArray.length - 1] >= newArray[newArray.length - 2], true)
    })

  it('should sort negative numbers', () => {
    let array = [ -5, -3, -4, -2, -1 ]

    insertionSort(array);
    assert.equal(array[0] <= array[1], true)
    })
})
