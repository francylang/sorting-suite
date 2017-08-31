const quickSort = (array) => {

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (pivot >= array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort
