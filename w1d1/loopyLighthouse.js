

function loopyLighthouse (range, multiples, words) {
  var array = [];
  for (var i = range[0]; i <= range[1]; i++) {
    array.push (i);
  }
  for (i = 0; i < array.length; i ++) {
    if (array[i] % multiples[0] === 0 && array[i] % multiples[1] === 0) {
      console.log (words[0] + words[1]);
    } else if (array[i] % multiples[0] === 0) {
      console.log (words[0]);
    } else if ( array[i] % multiples[1] === 0) {
      console.log (words[1]);
    } else {
      console.log (array[i]);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);