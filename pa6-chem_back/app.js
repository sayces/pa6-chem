
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function factorial_1(n) {
  if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let iter = 1; iter <= n; iter++) {
      result = iter * result;
    }
    return result;
  }
}

// console.log(factorial_1(6));

function insertionSort(array) {
  const arr = array.slice()
  for (let i = 1; i < arr.length; i++) {   
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }  
  }
  
  return arr;

}

// console.log(insertionSort([3,2,1,4,6]))

