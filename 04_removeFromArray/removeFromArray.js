const removeFromArray = function(array, element, element2, element3, element4) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element && array[i] !== element2 && array[i] !== element3 && array[i] !== element4) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}


// Do not edit below this line
module.exports = removeFromArray;
