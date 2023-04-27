"use strict";
class BankAccount {
    constructor(accountHolder, accountNumber, currentBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.currentBalance = currentBalance;
    }
    depositFunds(depositAmount) {
        return depositAmount + this.currentBalance;
    }
    withdrawlFunds(withdrawlAmount) {
        return withdrawlAmount - this.currentBalance;
    }
}
const depsoitThisCash = 1400;
const withdrawlThisCash = 1000;
const nameOfPerson = "Nate Lewis";
const userAccountNumber = 8476;
const userCurrentBalance = 5000;
const visitTheBank = new BankAccount(nameOfPerson, userAccountNumber, userCurrentBalance);
console.log(visitTheBank.depositFunds(depsoitThisCash));
console.log(visitTheBank.withdrawlFunds(withdrawlThisCash));
//# sourceMappingURL=banking.js.map