class BankAccount {
  accountHolder: string;
  accountNumber: number;
  currentBalance: number;

  constructor(
    accountHolder: string,
    accountNumber: number,
    currentBalance: number
  ) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.currentBalance = currentBalance;
  }
  depositFunds(depositAmount: number): number {
    return depositAmount + this.currentBalance;
  }
  withdrawlFunds(withdrawlAmount: number): number {
    return withdrawlAmount - this.currentBalance;
  }
}

const depsoitThisCash: number = 1400;
const withdrawlThisCash: number = 1000;

const nameOfPerson: string = "Nate Lewis";
const userAccountNumber: number = 8476;
const userCurrentBalance: number = 5000;

const visitTheBank = new BankAccount(
  nameOfPerson,
  userAccountNumber,
  userCurrentBalance
);

console.log(visitTheBank.depositFunds(depsoitThisCash));
console.log(visitTheBank.withdrawlFunds(withdrawlThisCash));
