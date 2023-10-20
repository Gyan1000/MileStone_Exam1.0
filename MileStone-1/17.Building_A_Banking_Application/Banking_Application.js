class Bank
{
   constructor(name,balance)
   {
    this.name=name;
    this.balance=balance;
   }
   deposit(amount)
   {
      if(amount>0)
       this.balance+=amount;

      else
      console.log("Please Enter Valid Amount");
   }
   withdraw(amount)
   {
      if(amount>0 && this.balance>amount)
          this.balance-=amount;

      else
         console.log("You can not withdraw money");
   }
   details()
   {
      console.log("Name ",this.name,"  Balanace",this.balance)
   }

}

let user1=new Bank('Shri_Ram',1000);
let user2=new Bank("Radha_Rani",2000);

user1.deposit(200);
user2.withdraw(500);

//PRINT USER'S ACCOUNT DETAILS 
user1.details();
user2.details();


