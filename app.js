let rat = 0;
let ox = 1;
let tiger = 2;
let rabbit = 3;
let dragon = 4;
let snake = 5;
let horse = 6;
let goat = 7;
let monkey = 8;
let rooster = 9;
let dog = 10;
let pig = 11;
let userYear = prompt('What year were you born?');
let zodiacSign = (userYear - 4) % 12;
console.log(zodiacSign);
console.log('0. Rat 1. Ox 2. Tiger 3. Rabbit 4. Dragon 5. Snake 6. Horse 7. Goat 8. Monkey 9. Rooster 10. Dog 11. Pig')