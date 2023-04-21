import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {

  currentUser:any

  userDetails:any={
    1000:{username:"alisha",acno:1000,password:"ali123",balance:0},
    1001:{username:"alan",acno:1001,password:"ali123",balance:0},
    1002:{username:"adhil",acno:1002,password:"ali123",balance:0},
    1003:{username:"ajwin",acno:1003,password:"ali123",balance:0}
  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in this.userDetails){
      return false
    }
    else{
      userDetails[acno]={username:uname,acno,password:psw,balance:0}
      return true
    }
  }


  logins(acno1:any,psw1:any){
    var userDetails=this.userDetails
    if(acno1 in userDetails){
      if(psw1==userDetails[acno1]["password"]){
        this.currentUser=userDetails[acno1]["username"]
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

    deposit(acno:any,psw:any,amt:any){
      // to convert string amount to int
      var amount=parseInt(amt)
      var userDetails=this.userDetails
      var psw:any
      if(acno in userDetails){
        if(psw==userDetails[acno]["password"]){
          userDetails[acno]["balance"]+=amount
          return userDetails[acno]["balance"]
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }

    withdraw(acno:any,psw:any,amt:any){
      // to convert string amount to int
      var amount=parseInt(amt)
      var userDetails=this.userDetails
      var psw:any
      if(acno in userDetails){
        if(psw==userDetails[acno]["password"]){
          if(amount<userDetails[acno]["balance"]){
          userDetails[acno]["balance"]-=amount
          return userDetails[acno]["balance"]
        }
        else{
          alert("Insufficient Balance!")
        }
      }
        else{
          return false
        }
      }
      else{
        return false
      }
    }

  constructor() { }
}




















