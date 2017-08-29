import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';

function genRandomNumberArray(count) {
  let numbers = [];
  let max = 1000;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }

  return numbers;
}

let randomArray = genRandomNumberArray(10);


describe('TDD with insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort 2 numbers in an array from least to greatest', () => {
    let array = [ 2, 1 ]

    assert.equal(array[0] > array[1], true);
    console.log(array);
    insertionSort(array);
    console.log(array);
    assert.equal(array[0] < array[1], true);
  })

  it.skip('should sort 5 numbers in an array from least to greatest', () => {
    let array = [ 5, 3, 4, 2, 1 ]

    assert.equal(array[0] > array[1], true);
    insertionSort(array);
    assert.equal(array[0] < array[1], true);
  })
})
