
var countdownGenerator = function (x) {
  /* your code here */
  var countList = [ "Blast off!",
                    "T-minus 1...",
                    "T-minus 2...",
                    "T-minus 3...",
                    ];
  var startCount = x;
  // if (x > 0) {
  //   console.log("T-minus " + x + "...")
  // }

  return function() {
    if (startCount < 0) {
      console.log("Rockets already gone, bub!")
    } else {
      console.log(countList[startCount]);
      startCount -= 1;
    }

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
