// create a function that returns a factorial 

var factorial = function(num) {
  var result = 1;
  if (num < 0) {
    return 'Error: Enter a positive integer';
  } else if (num === 0) {
    return result;
  } else  if (num % 1 === 0){
    for (var i = num; i > 1; i--) {
      result *= i;
    }
    } else {
       return 'Error: Enter a positive integer';
    }
  return result;
};

//Write a function called simpleSymbols that takes in a string parameter and determines if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (i.e. ++d+=====+c++===a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

var simpleSymbols = function(str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== '+' && str[i] !== '=') {
			if (str[i - 1] !== '+' || str[i + 1] !== '+') {
				return false;
			}
		}
	}
	return true;
};


//Given an arbitrary input string, return the first character that does not appear multiple times in the string.

/*
- if no repeats return false
- loop through string, fill an object with value incrementing as each character is found multiple times
- loop through object finding first item with '1' value and return
*/

var noRepeats = function(str) {
  var lookup = {};
  for (var i = 0; i < str.length; i++) {
    if (!lookup[str[i]]) {
      lookup[str[i]] = 1;
    } else {
      lookup[str[i]] += 1;
    }
  };
  for (key in lookup) {
    if (lookup[key] === 1) {
      return key;
    }
  }
  return false;
};


// Write a function called ABCheck that takes a string parameter and returns the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (e.g "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

var ABCheck = function(str) {
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'a')
			if (str[i - 4] === 'b' || str[i + 4] === 'b') {
				return 'true';
			}
	}
	return 'false';
}


//Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fibonacci sequence, return "yes" if it is, if not return the string "no".

var fibonacci = function(num) {
	var fibArr = [0, 1];
	for (var i = 2; i <= num; i++) {
		nextNum = fibArr[i - 1] + (fibArr[i - 2]);
		fibArr.push(nextNum);
		console.log(nextNum);
	}
}

var isFibonacciNum = function(num) {
	var testArr = [0, 1];
	if (num === 0 || num === 1) return "yes";
	while (testArr[testArr.length - 1] < num) {
		for (var i = 2; i <= num; i++) {
			nextNum = testArr[i - 1] + testArr[i - 2];
			if (nextNum === num) {
				return "yes";
			}
			testArr.push(nextNum);
		}
	}
	return "no";
}

/*Find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of times, just return one of them. If there are no items that occur an even number of times, return null. 
var onlyEven = evenOccurence([1,6,2,4,4,5,6,8,9,6]);
console.log(onlyEven); //4

var onlyEven = evenOccurence([1,1,3,4,1]);
console.log(onlyEven); //null*/

var evenOccurence = function(arr) {
	var lookup = [];
	for (var i = 0; i < arr.length; i++) {
		if (!(lookup[arr[i]])) {
			lookup[arr[i]] = 1;
		} else {
			lookup[arr[i]]++;
		}
	}
	for (var key in lookup) {
		if (lookup[key] % 2 === 0) {
			return key;
		}
	}
	return null;
}