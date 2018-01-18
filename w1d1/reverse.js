
function reverse(arr){
  var newArr = [];
  for (var j = 2; j < arr.length; j++){
  var output = "";
    for (var i = arr[j].length - 1; i >= 0; i--){

      output = output + arr[j][i];
    }

  newArr.push(output);
  }
  return newArr;
}


var input = process.argv;

console.log (reverse(input));
