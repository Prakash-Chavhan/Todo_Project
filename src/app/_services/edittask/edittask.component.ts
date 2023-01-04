import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Models/Task.model';
import { AuthServiceService } from '../auth-service.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  msg:any;
  task:Task = {
    Taskid: 0,
    tname: '',
    des: '',
    sdate: '',
    edate: '',
    status: '',
    userid:0
  }
  constructor(private taskservice:ProductserviceService,private userauth:AuthServiceService){}
  ngOnInit(): void {
    

    this.taskservice.gettaskdetails(this.userauth.geteditid()).subscribe(
      (response:any )=>{
        console.log(response);
        this.formData=response  
          },
      (error: any)=>{
      this.msg="";
        console.log(error);
      }
      
      
         );
  }
  submit( ){
    console.log(this.formData);
  }
  formData:any ={
   
  };
  editTask(editForm:NgForm){
 
   
    console.log(editForm.value)
    //this.formData.userid=this.userauth.getid();
      this.taskservice.AddTask(this.formData).subscribe(
        (response:Task )=>{
          console.log(response);
          this.msg="Task Updated Successfully !!";
        },
        (error: any)=>{
        this.msg="Something Went Wrong";
          console.log(error);
        }
        
        
           );
        
          }
  
  
}
