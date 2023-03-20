import { Component } from '@angular/core';
import { ServiceFileService } from '../Services/service-file.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno: any
  psw: any
  uname: any
  router: any;

  constructor(private services: ServiceFileService) { }
  register() {
    var acno = this.acno
    var psw = this.psw
    var uname = this.uname

    const result = this.services.register(acno,uname,psw)
    if (result) {
      alert("Registration Succesful")
      this.router.navigateByUrl(" ")
    }
    else {
      alert("User Already Excisting!")
    }
  }
}
