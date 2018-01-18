function pigLatin (arr){
  var newArr = [];
  for (var i = 2; i <arr.length; i++){
    var output = "";
    for (var j = 1; j < arr[i].length; j++){
      output = output + arr[i][j];
    }
    output = output  + arr[i][0] + "ay";
    newArr.push (output);
  }
  return newArr.join(" ");

}

var input = process.argv;
console.log (pigLatin(input));