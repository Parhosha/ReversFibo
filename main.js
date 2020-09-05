let outputfile = require('./sub.js');

function getNum(numAr) {
  numAr = numAr.trim();
  let num = '';

  for (let i = numAr.length; i > 0; i--) {
    if (!+numAr[i - 1] && numAr[i - 1] != 0) {
      break;
    }
    num = `${numAr[i - 1]}` + num;
  }

  return num;
}
function creatFlipString(mapArr, numArr) {
  let phrase = '';

  for (var [key, value] of mapArr) {
    const fib = numArr.find((el) => el == key);
    if (fib) {
      if (value[0] == ' ') {
        phrase = phrase + fib + '' + value + '\n';
      } else {
        phrase = phrase + fib + ' ' + value + '\n';
      }
    }
  }
  return phrase;
}

function creatFibo(max) {
  let arr = [];
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  for (let n of fibonacci()) {
    arr.push(n);
    if (n > max) break;
  }
  return arr;
}

function rebaseStrings(value) {
  let phrase = '';
  for (let i = 0; i < value.length; i++) {
    phrase = phrase + value[value.length - i - 1];
  }
  return phrase;
}

function createArrays(a) {
  let splitStrArr = a.split('\n');
  const mapArr = new Map();
  let max = 0;
  let arr = '';

  for (let i = 0; i < splitStrArr.length; i++) {
    let key = 0;
    let value = '';

    key = getNum(splitStrArr[i]);
    value = splitStrArr[i].slice(0, splitStrArr[i].length - key.length);
    mapArr.set(key, value);
  }

  for (var [key, value] of mapArr) {
    if (key > max) {
      max = +key;
    }
    mapArr.set(key, rebaseStrings(value));
  }

  let numArr = creatFibo(max - 1);
  for (let h = 0; h < numArr.length; h++) {}
  let result = creatFlipString(mapArr, numArr);

  /* return document.write(
    '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' +
      encodeURIComponent(result) +
      '" download="output.txt">output.txt</a>',
  );
  */
  return result; // for test
}
function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();

  reader.readAsText(file);
  reader.onload = function () {
    return createArrays(reader.result);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}

module.exports = createArrays;
