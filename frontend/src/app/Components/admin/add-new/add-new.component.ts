import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Holiday } from 'src/app/Model/Holiday';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  
  destination: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  price: any = null;
  img: string = '';
  imgFile: FormData = new FormData();

  startDateTouched = false;
  endDateTouched = false;

  priceValid: boolean = true;
  durationValid:boolean = true;



  constructor(private http:HttpClient,private router:Router){}

  

  submitForm(){
    const newHoliday =  {
      destination:this.destination,
      description:this.description,
      startDate:this.startDate,
      endDate:this.endDate,
      price:this.price,
      img:this.img,
    }
    this.http.post("http://localhost:5000/api/v1/admin/holidays/uploadPhoto" ,this.imgFile)
    .subscribe(()=>{
  console.log(newHoliday);
    this.http.post("http://localhost:5000/api/v1/admin/holidays/addNewHoliday",newHoliday)
    .subscribe(()=> this.router.navigate(["admin/holidays"]))
  })
    }

    onFileChange(event: any): void {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const file:File = fileList[0];

        const formData: FormData = new FormData();
        formData.append('file', file);

        this.imgFile = formData;
        this.img = file.name;

      }
    }
  
    cancel(){
      this.router.navigate(["admin/holidays"]);
  }


  checkPriceValid(){
    if(this.price < 0 || this.price > 10000){
      this.priceValid = false
    }else{
      this.priceValid = true
    }
  }
  

  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }


  checkDuration() {
    const selectedStartDate = new Date(this.startDate);
    const selectedEndDate = new Date(this.endDate);

    if (selectedStartDate > selectedEndDate) {
      this.endDate = new Date();
      this.durationValid = false;
    } else {
      this.durationValid = true;
    }
  }

  areDatesFilled(): boolean {
    return !!this.startDate && !!this.endDate;
  }
  
  areAllInputsFilled(): boolean {
    return !!this.destination && !!this.description && !!this.startDate && !!this.endDate && !!this.price && !!this.img;
  }


}

