function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found Waldo at index 2!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);