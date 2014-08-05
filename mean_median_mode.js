var numbers = [342, 2, 3, 4, 34, 34235, 23, 3, 5, 5];

function mean(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var average = sum/numbers.length;
  return average;
};

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
      else {
        modeMap[num]++;  
      }

      if (modeMap[num] > maxCount) {
        maxNum = num;
        maxCount = modeMap[num];
      }
      else if (modeMap[num] == maxCount) {
        maxNum += ' and ' + num;
        maxCount = modeMap[num];
      }
    }
    return maxNum;
}

// Help from: 
// https://gist.github.com/caseyjustus/1166258
// http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array


console.log("The mean number is " + mean(numbers) + ".");
console.log("The median number is " + median(numbers) + ".");
console.log("The mode number is " + mode(numbers) + ".");


