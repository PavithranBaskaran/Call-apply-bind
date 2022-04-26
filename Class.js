class Account{
    constructor(name, accno, balance)
    {
        this.name = name;
        this.accno = accno;
        this.balance = balance
    }
    getBalance() {
        
        
        return `Your balance is ${this.balance}`;
    }
    withDraw(amount)
    {
         if(this.balance >= amount)
         {
             this.balance = this.balance - amount;
             return this.getBalance();
         }
         else
         {
             return `Insufficient balance, ${this.getBalance()}`;
         }
    }
    deposit(amount)
    {
        this.balance+=amount;
        return `Your balance is ${this.balance}`;
    }
    
}

const Pavithran =  new Account("Pavithran", 129, 1_00_000)
console.log(Pavithran.withDraw(20000))
console.log(Pavithran.withDraw(200))
console.log(Pavithran.deposit(200000))
