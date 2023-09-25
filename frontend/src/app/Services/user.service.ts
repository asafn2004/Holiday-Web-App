import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserService {


  private userID:number = 0; //if someOne refreshes the page it will be userID 0 - and there is no userID=0, therefore - go to login
  private roleSubject:BehaviorSubject<string> = new BehaviorSubject<string>('user');
  role$ = this.roleSubject.asObservable();
  private fullName:string = '';



  constructor() { }

  

  setUserID(id:number){
    this.userID = id;
  }

  getUserID(){
    return this.userID;
  }

  

  setInfo(role:any, userID:number, fullName:string){
    this.userID = userID
    this.fullName = fullName;
    this.roleSubject.next(role);
  }

 

  getFullName(){
    return this.fullName
  }

}