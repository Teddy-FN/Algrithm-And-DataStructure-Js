const factorialNumber = number => {
    if (number == 1) {
        return number
    } else {
        return number * factorialNumber(number - 1)
    }
}
console.log(factorialNumber(5))