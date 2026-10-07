function getRandomInt(min, max) {
  const low = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const up = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (up - low + 1) + low);
}

function getRandomEl(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function createRandomID(min, max) {
  const prevValues = [];

  return function () {
    let currentValue = getRandomInt(min, max);
    while (prevValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    prevValues.push(currentValue);
    return currentValue;
  };
}

export { getRandomInt, getRandomEl, createRandomID };
