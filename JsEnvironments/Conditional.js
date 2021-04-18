let low = 20
let mid = 30
let high = 50

let current = 50
let found = -1
if (current > mid) {
    mid = (high + current) / 2
} else if (current < mid) {
    mid = (current - low) / 2
} else {
    found = current
}



// Switch 
let numberOfMonth = 1
let result
switch (numberOfMonth) {
    case 1:
        result = 'January'
        break;
    case 2:
        result = 'February'
        break;
    case 3:
        result = 'March'
        break;
    case 4:
        result = 'April'
        break;
    case 5:
        result = 'May'
        break;
    case 6:
        result = 'June'
        break;
    case 7:
        result = 'July'
        break;
    case 8:
        result = 'August'
        break;
    case 9:
        result = 'September'
        break;
    case 10:
        result = 'October'
        break;
    case 11:
        result = 'November'
        break;
    case 12:
        result = 'December'
        break;
    default:
        result = 'Yang anda masukan bukan angka bulan'
        break;
}
console.log(result)