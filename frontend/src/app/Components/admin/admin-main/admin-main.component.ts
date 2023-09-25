import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Holiday } from 'src/app/Model/Holiday';
import { UserService } from 'src/app/Services/user.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit{
  holidays:Holiday[] = [];
  userID:number = this.service.getUserID();
  page: number = 1;
  imgURL:string = "http://localhost:5000/photos/"




  constructor(private http:HttpClient, private service:UserService, private element:ElementRef, private router:Router, private modalService: NgbModal){}

  ngOnInit(): void {
    this.http.get<Holiday[]>("http://localhost:5000/api/v1/holidays/getAllHolidays")
    .subscribe((data)=>{
      this.holidays = data;
      // this.userID = this.service.getUserID();
      console.log('userID: ', this.userID);
      this.sortItemsByStartDate();
    });
}




sortItemsByStartDate(): void {
this.holidays.sort((holidayA, holidayB) => {
  const dateA = new Date(holidayA.startDate);
  const dateB = new Date(holidayB.startDate);
  return dateA.getTime() - dateB.getTime();
});
}


scrollToTop(){
  this.element.nativeElement.querySelector('.holidays').scrollTop = 0;
}

editHoliday(holidayID:any){
this.router.navigate([`admin/editHolidayById/${holidayID}`])
}

deleteModal(id:any, destination:string){
  const modalRef = this.modalService.open(DeleteModalComponent);
  modalRef.componentInstance.destination = destination;
  modalRef.componentInstance.holidayID = id;
  modalRef.componentInstance.onDelete.subscribe(()=>{
    modalRef.close();
    this.ngOnInit();
  })
}




}
