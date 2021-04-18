const checking = (amount) => {
    this.deposit = deposit
    this.withdraw = withdraw
    this.toString = toString
    this.balance = amount
}

const deposit = amount => {
    this.balance += amount
}

const widthdraw = amount => {
    if (amount <= this.balance) {
        this.balance -= amount
    }
    if (amount > this.balance) {
        console.log('Innusuficant funds')
    }
}

const toString = () => {
    return 'balance ' + this.balance
}

var account = new Checking(500);
account.deposit(1000)
console.log(account.toString())