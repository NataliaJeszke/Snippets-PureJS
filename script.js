//1. SORT ARRAYS
//1.1 Bubble sort - //Check two neighbour numbers and switch places if second one is bigger than first one.
//FOR loop with IF switching places.
let arrayBubble = [9, 10, 5, 1, 0, -2, 78, 101];
for (let i = 0; i < arrayBubble.length; i++) {
  for (let j = 0; j < arrayBubble.length; j++) {
    let x = arrayBubble[j];
    let y = arrayBubble[j + 1];

    if (x > y) {
      arrayBubble[j] = y;
      arrayBubble[j + 1] = x;
    }
  }
}
console.log(arrayBubble);
