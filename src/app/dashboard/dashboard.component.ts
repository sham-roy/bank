import { Component } from '@angular/core';
import { ServiceFileService } from '../Services/service-file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any

  acno:any
  psw:any
  amt:any

  acno1:any
  psw1:any
  amt1:any

  constructor(private services:ServiceFileService){
      this.user=this.services.currentUser
  }

  deposit():void {
    var acno=this.acno
    var psw=this.psw
    var amt=this.amt
    const result=this.services.deposit(acno,psw,amt)
    if(result){
      alert(`your account has been credited with amount ${amt} and the available balance is ${result}`)
    }
    else{
      alert("incorrect password")
    }
  }

  withdraw(){
      var acno=this.acno1
      var psw=this.psw1
      var amt=this.amt1
      const result=this.services.withdraw(acno,psw,amt)
    if(result){
      alert(`your account has been debited with amount ${amt} and the available balance is ${result}`)
    }
    else{
      alert('incorrect acno or password')
    }
  }
}

























