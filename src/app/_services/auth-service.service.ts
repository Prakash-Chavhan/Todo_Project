import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public seteditid(element: any) {
    localStorage.setItem('editid',element);
  }
  public geteditid(){
    return localStorage.getItem('editid');
  }
  
  constructor() { }
  public setname(name: string) {
    localStorage.setItem('name',name);
  }
  public getname(){
    return localStorage.getItem('name');
  }
  public setRole(role:string){
    localStorage.setItem('role',role);

  }
  public getRole() {
    return localStorage.getItem('role');
  }
  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken',jwtToken);

  }
  public getToken() {
    return localStorage.getItem('jwtToken');
  }
public clear(){
  localStorage.clear();
}

public isLoggedIn(){
  return this.getRole() && this.getToken();
}
public setId(id:string){
  localStorage.setItem('id',id);
}

getid() {

 return localStorage.getItem('id');
}

}
