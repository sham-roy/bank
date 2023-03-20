import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceFileService } from '../Services/service-file.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="your perfect banking partner"
  data1="enter your account number"

  acno=""
  psw=""
  //or ---> acno:any

  constructor(private router:Router,private services:ServiceFileService){ }

  ngOnInit(): void {

  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    const result=this.services.login(acnum,psw)
    // alert('login succesful')
    if(result){
      alert('login success')
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert('incorrect acno or password')
    }
  }
}
