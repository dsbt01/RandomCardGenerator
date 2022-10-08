window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let radomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[radomIndex];
}

let generateRandomSuit = () => {
  let suits = ["diamond", "spade", "heart", "club"];
  let radomIndex = Math.floor(Math.random() * suits.length);
  return suits[radomIndex];
}