window.onload = () => {
  //write your code here
  document.querySelector('.card').classList.add('heart');

  setTimeout(() => {
    document.querySelector('.card').classList.remove('heart');
    document.querySelector('.card').classList.add('spade');
  }, 1000);
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