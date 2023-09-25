import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'frontend';


constructor(private router:Router, private service:UserService) {}


  ngOnInit(): void {

   //checks if the user is logged in :
   
   if(this.service.getUserID() == 0){
    this.router.navigate([""]);
   }
  }
}


