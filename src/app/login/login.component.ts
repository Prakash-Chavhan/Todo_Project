import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import { UserserviceService } from '../_services/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message= "";
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private User_service:UserserviceService,
    private userAuthservice:AuthServiceService,
    private router:Router
    
    ){

  }
  ngOnInit(): void {
   
  }
  formData:any ={
    
  };
  submit( ){
    console.log(this.formData);
  }
  login(loginForm:NgForm){
    
   this.User_service.login(loginForm.value).subscribe(
(response : any)=>{
  // console.log(response.user.roles);
  // console.log(response.jwtToken);
  

 // const role=response.user.roles;
//   if(role=){
// this.message="Please Enter Valid Username and Password !!"
//  }
 if(response.user===null){
  this.message="Please enter valid Email and Password !!"
 }else{
  this.userAuthservice.setRole(response.user.roles);
  this.userAuthservice.setToken(response.jwtToken);
  this.userAuthservice.setId(response.user.id);
  this.userAuthservice.setname(response.user.name);
  console.log(response.jwtToken)

 }
 
 
 if(response.user.roles==='USER'){
this.router.navigate(['/user']);
  }else{
    this.router.navigate(['/admin']);
  }
},
(error)=>{
  this.message='Something went wrong !!';
  console.log(error);
}


   );

  }
}
