// create a mapping function

function map (array, callback){
  var newArray = [];
  for (i = 0;i < array.length; i++){
    var eachOutput = callback(array[i]);
    newArray.push(eachOutput);
  }
  console.log (newArray);
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});