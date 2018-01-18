

function diceRoller (num) {
  var dice = [];
  for (var i = 0; i < num; i++){


   dice.push(Math.floor(Math.random() * Math.floor(6)) + 1);

   //console.log (dice);
  }
  return dice;
}

var input = process.argv[2];
console.log(diceRoller (input).join(" "));
