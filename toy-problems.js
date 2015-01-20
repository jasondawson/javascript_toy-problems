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