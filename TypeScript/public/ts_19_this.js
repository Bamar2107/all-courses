"use strict";
class Account {
    constructor(accountName) {
        this.accname = accountName;
    }
    accountDetails() {
        console.log(`Account Holder name is : ${this.accname}`);
    }
}
let myAccount = new Account('Amar');
//console.log(myAccount.accname);
myAccount.accountDetails();
let myAccountCopy = {
    accoutDetails: myAccount.accountDetails
};
console.log(myAccountCopy.accoutDetails.bind(myAccount)());
