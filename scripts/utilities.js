// var forEach = function(array) {
  // for (var i = 0; i < array.length; i++) {
  //   revealPoints(i);
  // }
// };

var forEach = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(i);
  }
}

// Use a loop to go through all elements in the points array.
// Execute a callback for each element.
