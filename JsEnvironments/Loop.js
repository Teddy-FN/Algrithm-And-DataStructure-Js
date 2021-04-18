var number = 1
let sum = 0
// While Loop
while (number <= 10) {
    sum += number
    ++number
}
console.log(sum)


// For Loop
let example = 1
let penambahan = 0
for (let example = 1; example <= 20; example++) {
    penambahan += example
}
console.log(penambahan)


// For Loop using Array 
const numberArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12, 13, 14, 15, 16, 17, 18, 20, 50
]
let sumArr = 0;
for (let idx = 1; idx < numberArr.length; idx++) {
    sumArr += numberArr[idx]
}
console.log(sumArr)


// For Loop minus 
let powSum = 1
for (let i = 10; i >= 1; i--) {
    powSum *= i
}
console.log(powSum)