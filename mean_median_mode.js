var stringNumbers = process.argv;

// Remove "node" and "fileName" from process.argv array
stringNumbers.shift();
stringNumbers.shift();


// Convert strings from process.argv to integers
var numbers = stringNumbers.map(function (x) {
  return parseInt(x, 10);
});

// Calculate mean
function mean(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var average = sum/numbers.length;
  return average;
}

// Calculate median
function median(numbers) {
  numbers.sort(function (a,b){
    return a - b;
  });
  var half = Math.floor(numbers.length/2);

  if (numbers.length % 2) {
    return numbers[half];
  }
  else {
    return (numbers[half - 1] + numbers[half])/ 2;
  }
}

// Calculate mode (with clause in case of 2 equal modes)
function mode(numbers) {
    var modeMap = {};
    var maxNum = numbers[0], maxCount = 1;
    if (numbers.length == 0) {
      return null;
    }

    for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      if (modeMap[num] == null) {
        modeMap[num] = 1;
      }

      if (modeMap[num] > maxCount) {
        maxNum = num;
        maxCount = modeMap[num];
      }
      else if (modeMap[num] == maxCount) {
        maxNum += ' and ' + num;
        maxCount = modeMap[num];
      }
       else {
        modeMap[num]++;  
      }
    }
    return maxNum;
}

// Help from: 
// http://stackoverflow.com/questions/9593765/how-to-convert-array-values-from-string-to-int 
// https://gist.github.com/caseyjustus/1166258
// http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array


console.log("The mean number is " + mean(numbers) + ".");
console.log("The median number is " + median(numbers) + ".");
console.log("The mode number is " + mode(numbers) + ".");


