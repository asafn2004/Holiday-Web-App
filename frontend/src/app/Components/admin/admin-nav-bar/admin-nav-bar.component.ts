import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent {
  

constructor(private router:Router){}


goToAddCom(){
  this.router.navigate(["admin/addNewHoliday"]);
}

goToHomePage(){
  this.router.navigate(["admin/holidays"]);
}

goToReport(){
  this.router.navigate(["admin/chartReport"]);
}

}
