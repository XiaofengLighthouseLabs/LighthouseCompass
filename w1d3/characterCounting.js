// set an object named Loc
var Loc = {};
// start a function
function countLetters(str){

  // loop from beginning
  for (var i = 0; i < str.length; i++){
    // each time the letter appear show the loction
    // set an array for each letter first
    // push it each time

     if (Loc[str.charAt(i)]){
      Loc[str.charAt(i)].push(i);
    } else {
      Loc[str.charAt(i)] = [i] ;
    }
  }
  delete Loc[' '];
  console.log (Loc);
}
countLetters('lighthouse in the house');