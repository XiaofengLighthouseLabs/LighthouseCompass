// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found him!");
  console.log ("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// forEach exercise

function findWaldo(arr, found) {
  arr.forEach (function (item,index){
    if (item === "Waldo"){
      found(index);
      }  // execute callback
    })
}

function actionWhenFound(jjj) {
  console.log("Found him!");
   console.log ("Found Waldo at index " + index);

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);