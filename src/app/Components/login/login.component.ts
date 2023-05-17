import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/UserService/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  bgColor:boolean=false;

  name: any;
  email: any;
  password: any;
  number: any;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private route: Router) { }


  loginBgColor(){
    this.bgColor=!this.bgColor
  }

  signupBgColor(){
    this.bgColor=!this.bgColor
    console.log(this.bgColor);
  }

  signup() {
    let reqdata = {
      fullName: this.name,
      email: this.email,
      password: this.password,
      phone: this.number,
    }
    console.log('signup', reqdata);

    this.userService.signupService(reqdata).subscribe((result: any) => {
      console.log(result);
      this.snackBar.open('Account created Successfully!', '', {
        duration: 2000
      });

    })
  }

  login() {
    let reqdata = {
      email: this.email,
      password: this.password,
    }
    console.log('login', reqdata);


    this.userService.loginService(reqdata).subscribe((result: any) => {
      console.log(result);
      this.snackBar.open('Login Successfull !', '', {
        duration: 2000
      });
      localStorage.setItem('token',result.result.accessToken)
      this.route.navigateByUrl('/home');
    })
  }
}
