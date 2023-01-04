import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { AuthServiceService } from '../_services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isActive=true;
 

  constructor(private userauthservice:AuthServiceService,
    private router:Router){

  }
  name=this.userauthservice.getname();
  ngOnInit(): void {
   
  }
  public isLogIn(){
    return this.userauthservice.isLoggedIn();
     
  }
public logout(){
  this.userauthservice.clear();
  this.router.navigate(['/home'])
}

}
