import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import { ProductserviceService } from '../_services/productservice.service';

@Component({
  selector: 'app-importanttask',
  templateUrl: './importanttask.component.html',
  styleUrls: ['./importanttask.component.css']
})
export class ImportanttaskComponent implements OnInit{
  displayedColumns: string[] = ['Id', 'Task', 'Description', 'Start Date', 'End Date', 'Status', 'Edit', 'Delete'];
  Tasklist: [] = [];


  name:any;
  size: any;
  len: any;
  constructor(private User_service: AuthServiceService,
    private productservice: ProductserviceService,
    private router: Router){

  }
  ngOnInit(): void {
   this.imptasklist();
  }
  imptasklist() {
    this.productservice.forImptasklist().subscribe(
      (response:any) => {
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
  deleteTask(element: any){
    console.log(element) ;
    this.productservice.deletetask(element).subscribe(
     (res) => {
       this.imptasklist();
       
       console.log(res);
     
     },
     (err: HttpErrorResponse) => {
       console.log(err)
     }
 
 
   );
   }
  
}
