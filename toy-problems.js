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

//Write a function that accepts a number, n, and returns the nth Fibonacci number. Use a recursive solution to this problem; if you finish with time left over, implement an iterative solution.

//iterative
var nthFibonacci = function(num) {
	//0, 1, 1, 2, 3, 5
	var fibArr = [0, 1];
	var total = 0;
	if (num === 1) return 0;
	if (num === 2) return 1;
	if (num > 2) {
		for (var i = 2; i < num; i++) {
			nextNum = fibArr[i - 1] + fibArr[i - 2];
			fibArr.push(nextNum);
		}
	}
	return fibArr[fibArr.length - 1];
}

//recursive
var nthFibrec = function(num) {
	//fn = fn-1 + Fn-2
	if (num === 1) return 0;
	if (num === 2) return 1;
	if (num > 2) {
	return nthFibrec(num - 1) + nthFibrec(num - 2);
	}
}


// Create a function that takes in three strings as parameters(str, x, y). The goal is to swap all 'x' characters for 'y' characters.
// swapper('some string', 's', 'z') // returns 'zome ztring'

var swapper = function(str, x, y) {
	var tempArr = str.split('');
	for (var i = 0; i < str.length; i++) {
		if (tempArr[i] === x {
			tempArr[i] = y;
		}
	}
	str = tempArr.join('');
	return str;
}


//Write a function that accepts a multi dimensional array and returns a flattened version.
//flatten([1, 2, [3, [4], 5, 6], 7]) //returns [1, 2, 3, 4, 5, 6, 7]

var flatten = function(arr) {
	var newArr = arr.toString().split(',');
	for (var i = 0; i < newArr.length; i++) {
		newArr[i] = Number(newArr[i]);
	}
	return newArr;
}

var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];

//given the above object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

var objectArrayLookup = function (arr) {
    var lookup = {};
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
        	if (!lookup[key]) {
            	lookup[key] = {};
        	} 
        	if (!lookup[key][arr[i][key]]) {
        		lookup[key][arr[i][key]] = 1;
        	}
        	else {
            	lookup[key][arr[i][key]]++;
        	}
		}
	}
	return lookup;
}

//create a function that takes an array of objects as an argument and a string that represents a property of an object contained in the array and returns an object whose keys are the properties and whose values are arrays of objects that match that property.

//e.g.
/*var arr = [
    {name: 'Joe Montana', team: '49ers'}, 
    {name: 'Jerry Rice', team: '49ers'}, 
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];

//should return:
{ 
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
}*/

var objectArraySearch = function(arr, str) {
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            if (arr[i][key] === str) {
                tempArr.push(arr[i]);
            }
        }
        }
        return tempArr;
    }


//Create a function that can only be invoked once
//onlyOnce() returns something
//onlyOnce() undefined


var onlyOnce = function (num1, num2) {
	if (!onlyOnce.invoked) {
		onlyOnce.invoked = true;
		//do something
		return num1 + num2;
	}
}

var oneTime = (function(){
	var invoked = false;
	return function(num1, num2) {
		if (!invoked) {
			invoked = true;
			//do Something
			return num1 + num2;
		}
	}
})();

//make the following code work
var counter = getCounter();
//counter() //2
//counter() //4
//counter() //6
//counter() //8

var getCounter = function(num) {
	var count = 0;
	return function() {
		count += num;
		return count;
	}
}