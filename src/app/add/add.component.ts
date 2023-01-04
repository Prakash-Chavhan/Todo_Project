import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../Models/Task.model';
import { AuthServiceService } from '../_services/auth-service.service';
import { ProductserviceService } from '../_services/productservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  constructor(private taskservice:ProductserviceService,private userauth:AuthServiceService
     ){
     }
  formData:any ={
   
  };
  ngOnInit(): void {
  
  }
  msg!: string;
  
  task:Task = {
    Taskid: 0,
    tname: '',
    des: '',
    sdate: '',
    edate: '',
    status: '',
    userid:0
  }
  
 
 id=this.userauth.getid();
 
 

  submit( ){
    console.log(this.formData);
  }
  addtask(addForm:NgForm){
 
   
  console.log(addForm.value)
  this.formData.userid=this.userauth.getid();
    this.taskservice.AddTask(this.formData).subscribe(
      (response:Task )=>{
        console.log(response);
        this.msg="Task Added Successfully !!";
      },
      (error: any)=>{
      this.msg="";
        console.log(error);
      }
      
      
         );
      
        }


//         prepareformdata(task:Task) {
//           const formdata=new FormData();
//           var ii=this.userauth.getid();
//           formdata.append(
// 'userid',



//           );
// return formdata
//         }

        
}
