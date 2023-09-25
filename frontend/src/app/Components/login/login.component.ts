import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import {Router} from '@angular/router'
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isCorrect = '';
  validErrors: string = '';
  myURL = 'http://localhost:5000/api/v1/login/checkLogin';
 


  constructor(private http: HttpClient, private router:Router, private service:UserService) {}

  checkLogin() {
    this.validErrors = '';
    this.isCorrect = '';
    if(!this.checkValid())
    {return}

    const data = {
      email: this.email,
      password: this.password,
    };
 

    this.http.post(this.myURL, data).subscribe(
      {
        next: (result:any) => {
          const response = result[0]
          console.log("connected!\n role: ", response.role);
        this.service.setInfo(response.role, response.userID, response.fullName);
        if(response.role == "admin"){
          this.router.navigate(['admin/holidays']);
        }else {
          this.router.navigate(["holidays"])
        }

       
        },
        error: (error) => {
          console.log('error: ', error);
          this.isCorrect = 'Email Or Password Incorrect';
        }
      } as Observer<any>
    );

  }

  goToSignUp(){
    this.router.navigate(["register"])
  }

checkValid():boolean{
  this.validErrors = '';
  if(!this.email.includes('@')){
    this.validErrors += "Email must have @<br><br>"}
    if(this.password.length<4){
  this.validErrors += "Password has to be at least -> 4 characters<br>"
    }
    if(this.validErrors == ''){
      return true
    }
  return false
}



}
