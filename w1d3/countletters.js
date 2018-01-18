// set an object
var count = {};
// start a function
function countLetters(str){
  // newStr without space
  var newStr = str.split (" ").join("");
  //start loop from the beginning to end of newStr
  for (var i = 0; i < newStr.length; i++){
    // fisrt appear letter or not
    if (count [newStr[i]]){
      count [newStr[i]] += 1;
    } else {
      count [newStr[i]] = 1;
    }
  }
  console.log (count);
}
countLetters('lighthouse in the house');