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

//2. Objects
//2.1 Create new object
const newHuman = Object.assign({}, human, {
  height: 180,
  surname: `NAZWISKO`,
  age: 32,
});

const newHuman2 = {
  ...human,
  ...{
    height: 180,
    surname: `NAZWISKO`,
    age: 32,
  },
};

console.log(newHuman);
console.log(newHuman2);

//2.2 Add new property to an object
const human = {};
//2.2.1
human["surname"] = "nazwisko";
//2.2.2
Object.assign(human, {
  height: 180,
  surname: `NAZWISKO`,
  age: 32,
});
//2.2.3
Object.defineProperty(human, "name", {
  value: "IMIĘ",
  writable: false,
});
//2.2.4
human.weight = 50;

console.log(human);

//2.3 Object to array
const object1 = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
};

console.log(Object.entries(object1));

//2.4 Array to object
const array = new Map([a, 0], [b, 1], [c, 2], [d, 3]);

const obiekt1 = Object.fromEntries(array);

console.log(obiekt1);

//2.5 Loops for objects
const produkty=[
    {name: "Wizir", price: 20, quantity: 3},
    {name: "Omo", price: 15, quantity: 30},
    {name: "Ajax", price: 10, quantity: 4}
];

doZamowienia=[];

for (i=0; i<produkty.length; i++){
    produkty[i].price = produkty[i].price - 0.2*produkty[i].price;
    if (produkty[i].quantity<5){
        doZamowienia.push(produkty[i]);
    }
}
console.log(produkty);
console.log(doZamowienia);

//3.
//3.1 Check if palindrome
let word = prompt(`word`);
function reverseString(word) {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
if (word.length > 5) {
  alert(`"${word}" more than 5 letters`);
} else if (word === reverseString(word)) {
  alert(`it is a palindrome`);
} else {
  alert(`try again`);
}
