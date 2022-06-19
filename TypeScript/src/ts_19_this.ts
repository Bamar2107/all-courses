
class Account{

    accname:string;

    constructor(accountName:string){
         this.accname = accountName;
    }

    accountDetails(this:Account){
        console.log(`Account Holder name is : ${this.accname}`);
        
    }
}

let myAccount = new Account('Amar');
//console.log(myAccount.accname);
myAccount.accountDetails();


let myAccountCopy = {
    accoutDetails : myAccount.accountDetails
}
console.log(myAccountCopy.accoutDetails.bind(myAccount)());
