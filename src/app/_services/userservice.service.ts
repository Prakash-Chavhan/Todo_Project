import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService implements OnInit {
  
PATH_OF_API="http://localhost:81"
requestHeader=new HttpHeaders({
  "No-Auth":"True"
});
  
  constructor(private httpclient:HttpClient,private authservice :AuthServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
registration(registerData:any){
  return this.httpclient.post(this.PATH_OF_API+"/register",registerData,{headers:this.requestHeader})
}
 public login(loginData: any){
    return this.httpclient.post(this.PATH_OF_API +"/authenticate",loginData,{headers:this.requestHeader})
  }
 



// public roleMatch(allowedRoles:any){
// let isMatch=false;
// const userRoles:any=this.authservice.getRole();
// if(userRoles != null && userRoles){
// if(userRoles===allowedRoles){
//   isMatch=true;
//   return isMatch;
// }else{
//   return isMatch;
// }

}
















