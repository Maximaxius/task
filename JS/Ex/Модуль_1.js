//a) Напишите код, который сложит два числа (например, 5 и 7) и выведет результат на консоль.
console.log(`${5} + ${7} = ${5+7}`)


// b) Напишите код, который умножит два числа (например, 3 и 4) и выведет результат на консоль.
console.log(`${3} * ${4} = ${3*4}`)


// c) Напишите код, который поделит одно число на другое (например, 10 на 2) и выведет результат на консоль. С округлением до 2 знаков после запятой.
console.log(`${10} / ${2} = ${(10/2).toFixed(2)}`)


// d) Напишите код, который сгенерирует два случайных числа и отобразит результат суммы между ними.
let a = Math.floor(Math.random()*22);
let b = Math.floor(Math.random()*22);
console.log(`${a} + ${b} = ${a+b}`)