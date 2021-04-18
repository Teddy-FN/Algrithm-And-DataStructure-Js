const factorialNumber = num => {
    var result = 1
    for (let i = num; i >= 1; --i) {
        result *= i
    }
    return result
}
console.log(factorialNumber(10))
console.log(factorialNumber(5))



// More One param 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const curverNumb = (num, amount) => {
    for (let i = 0; i < num.length; i++) {
        num[i] += amount
    }
    return num
}
console.log(curverNumb(number, 10))