import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holiday } from 'src/app/Model/Holiday';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.css']
})
export class EditHolidayComponent implements OnInit{
  holidayID:number = 0;
  destination: string = '';
  description: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  price: number = 0;
  img: string = '';
  updatedImgName: string = '';
  imgFile: FormData = new FormData();
  imgURL:string = "http://localhost:5000/photos/"

  startDateTouched = false;
  endDateTouched = false;

  priceValid: boolean = true;
  durationValid:boolean = true;

  constructor(private http:HttpClient,private router:Router, private route: ActivatedRoute){}

  ngOnInit(){
  this.route.params.subscribe(params=>{
  this.holidayID = +params['id']});
  this.http.get<Holiday>(`http://localhost:5000/api/v1/admin/holidays/getHolidayById/${this.holidayID}`)
  .subscribe((holiday:Holiday)=>{
   this.destination = holiday.destination;
   this.description = holiday.description;
   this.startDate = holiday.startDate;
   this.endDate = holiday.endDate;
   this.price = holiday.price;
   this.img = holiday.img;
  })
   
  }

  

  submitForm(){
    const updatedHoliday =  {
      holidayID:this.holidayID,
      destination:this.destination,
      description:this.description,
      startDate:this.startDate,
      endDate:this.endDate,
      price:this.price,
      img:this.img,
    }
    if(this.imgFile.has('file')){
      updatedHoliday.img = this.updatedImgName;
      this.http.post("http://localhost:5000/api/v1/admin/holidays/uploadPhoto" ,this.imgFile)
      .subscribe(()=>{
      this.http.put("http://localhost:5000/api/v1/admin/holidays/updateHoliday",updatedHoliday)
      .subscribe(()=> this.router.navigate(["admin/holidays"]))
    })
    }else{
      this.http.put("http://localhost:5000/api/v1/admin/holidays/updateHoliday",updatedHoliday)
      .subscribe(()=> this.router.navigate(["admin/holidays"]))
    }
    }

    onFileChange(event: any): void {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const file:File = fileList[0];

        const formData: FormData = new FormData();
        formData.append('file', file);
        this.imgFile = formData;
        this.updatedImgName = file.name;

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
    return !!this.destination && !!this.description && !!this.startDate && !!this.endDate && !!this.price
  }
}
