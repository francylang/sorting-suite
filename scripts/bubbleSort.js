const bubbleSort = (array) => {

  for (let j = 0; j < array.length; j++) {
      for(let i = 0; i < array.length; i++) {
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
   }
 }
  return array
}

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


export default bubbleSort
