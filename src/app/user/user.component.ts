import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import { ProductserviceService } from '../_services/productservice.service';
import { UserserviceService } from '../_services/userservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Task', 'Description', 'Start Date', 'End Date', 'Status', 'Edit', 'Delete'];
  Tasklist: [] = [];



  message: any;
 
 name:any;
  size: any;
  len: any;
  constructor(private User_service: AuthServiceService,
    private productservice: ProductserviceService,
    private router: Router

  ) {

  }
  ngOnInit(): void {
    this.name = this.User_service.getname();
    this.forTasklist();
    this.forreminder();
  }

  forTasklist() {
    this.productservice.fortasklist().subscribe(
      (response) => {
        this.size = response.length;
        console.log(response);
        this.Tasklist = response;
        //this.tasklist=response;
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }


    );



  }
  forreminder() {
    this.productservice.reminder().subscribe(
      (res) => {
        this.len = res.length;
        console.log(res);
        // this.Tasklist=res;
        //this.tasklist=response;
      },
      (err: HttpErrorResponse) => {
        console.log(err)
      }


    );



  }
  deleteTask(element: any){
   console.log(element) ;
   this.productservice.deletetask(element).subscribe(
    (res) => {
      this.forTasklist();
      this.forreminder();
      console.log(res);
      // this.Tasklist=res;
      //this.tasklist=response;
    },
    (err: HttpErrorResponse) => {
      console.log(err)
    }


  );
  }
  edittask(element:any){
   this.User_service.seteditid(element);
this.router.navigate(['/edittask']);
  }

}
