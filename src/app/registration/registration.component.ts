import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import {  UserserviceService } from '../_services/userservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  msg!: string;
  constructor(private Uservice:UserserviceService,
    private userAuthservice:AuthServiceService,
    private router:Router
    
    ){

  }
  ngOnInit(): void {
   
  }
  
 
  formData:any ={};
  submit( ){
    console.log(this.formData);
  }
register(registerForm:NgForm){
  
  this.Uservice.registration(registerForm.value).subscribe(
    (response : any)=>{
      console.log(response);
      this.msg="Registration Successfully !! Please Signin.";
    },
    (error)=>{
    this.msg="User Already Exists !! Please Signin.";
      console.log(error);
    }
    
    
       );
    
      }
     
  }