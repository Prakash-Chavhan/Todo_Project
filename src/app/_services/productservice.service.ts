import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Models/Task.model';
import { AuthServiceService } from './auth-service.service';
import { TokenInterceptorService } from './token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  
  constructor(private httpclient:HttpClient ,private userauth:AuthServiceService,private tokeninter:TokenInterceptorService) { }
  
  requestHeader=new HttpHeaders({
    "No-Auth":"True"
  });
  
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userauth.getToken()}`
  });
   requestOptions = { headers: this.headers };

  public fortasklist(){
    return this.httpclient.get<[]>('http://localhost:81/taskcontrol/tasklist/'+this.userauth.getid());
  }
  public forImptasklist(){
    return this.httpclient.get<[]>('http://localhost:81/taskcontrol/getbystatus/'+this.userauth.getid()+'/Important');
  }
  public reminder(){
    
    return this.httpclient.get<[]>('http://localhost:81/taskcontrol/reminder/'+this.userauth.getid());
  }
  AddTask(task:FormData){
   
    return this.httpclient.post<Task>('http://localhost:81/taskcontrol/addtask',task)//this.requestOptions)
  }

  deletetask(taskid:number){
    return this.httpclient.get('http://localhost:81/taskcontrol/deletetask/'+taskid);
  }
 
  gettaskdetails(taskid:any){
    return this.httpclient.get('http://localhost:81/taskcontrol/task/'+taskid);
  }
}
