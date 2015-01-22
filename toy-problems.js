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
}