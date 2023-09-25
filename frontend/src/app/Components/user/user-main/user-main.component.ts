import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Filters } from 'src/app/Model/Filters';
import { Holiday } from 'src/app/Model/Holiday';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit{
  holidays:Holiday[] = [];
  filters:Filters = {'favorite':false,'future':false,'present':false};
  followersCountMap: { [holidayID: number]: number } = {};
  userFollowsMap: { [holidayID: number]: boolean } = {};
  userID:number = this.service.getUserID();
  page: number = 1;
  imgURL:string = "http://localhost:5000/photos/"




  constructor(private http:HttpClient, private service:UserService, private element:ElementRef){}

  ngOnInit(): void {
      this.http.get<Holiday[]>("http://localhost:5000/api/v1/holidays/getAllHolidays")
      .subscribe((data)=>{
        this.holidays = data;
        // this.userID = this.service.getUserID();
        // console.log('userID: ', this.userID);
        this.checkFollowers();
        this.checkUserFollows();
        // console.log("followersCountMap:",this.followersCountMap);
        // console.log("userFollowsMap: ", this.userFollowsMap);
        this.sortItemsByStartDate();
        // console.log('filters: ', this.filters);
      });
  }

  checkFollowers(){
    this.holidays.map(item=>{this.followersCountMap[item.holidayID] = 0});
    this.http.get<any[]>("http://localhost:5000/api/v1/holidays/getNumFollowers")
        .subscribe(data=>{data.map(item=>{
          this.followersCountMap[item.holidayID] = item.followers;
          })
        })
  }

  checkUserFollows(){
    this.holidays.map(item=>this.userFollowsMap[item.holidayID] = false)
    this.http.get<{'holidayID':number}[]>(`http://localhost:5000/api/v1/holidays/getHolidaysFollowed/${this.userID}`)
    .subscribe(data=>{data.map(item=>{
      this.userFollowsMap[item.holidayID] = true;
    })})  
  }

   favorite(holidayID:number){
if(this.userFollowsMap[holidayID]){
  this.http.delete(`http://localhost:5000/api/v1/holidays/removeFollow/${this.userID}/${holidayID}`)
  .subscribe(()=> {
  this.userFollowsMap[holidayID] = !this.userFollowsMap[holidayID]
   this.followersCountMap[holidayID]--; 
  })
  
}else{
  this.http.post(`http://localhost:5000/api/v1/holidays/addFollow`,{'userID':this.userID, 'holidayID':holidayID})
  .subscribe(()=> {
    this.userFollowsMap[holidayID] = !this.userFollowsMap[holidayID]
    this.followersCountMap[holidayID]++; 
  })
}
}

sortItemsByStartDate(): void {
  this.holidays.sort((holidayA, holidayB) => {
    const dateA = new Date(holidayA.startDate);
    const dateB = new Date(holidayB.startDate);
    return dateA.getTime() - dateB.getTime();
  });
}


setFilters(updated:Filters){
  this.filters = updated;
}

favoriteBool(item:Holiday):boolean{
  // console.log("favorite bool");
  return (this.filters.favorite ? this.userFollowsMap[item.holidayID] : true)
}

futureBool(item:Holiday):boolean{
  // console.log("future bool");
  const today = new Date();
  const start = new Date(item.startDate);
  return (this.filters.future ? today < start : true);
}

presentBool(item:Holiday):boolean{
  // console.log("present book");
  const today = new Date();
  const start = new Date(item.startDate);
  const end = new Date(item.endDate);
  return (this.filters.present ? (today >= start && today <= end) : true)
}


scrollToTop(){
  this.element.nativeElement.querySelector('.holidays').scrollTop = 0;
}

}
