import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Task } from '../Models/Task.model';
import { ProductserviceService } from './productservice.service';

@Injectable({
  providedIn: 'root'
})
export class TaskresolverService implements Resolve<any> {

  constructor(private taskservice:ProductserviceService) { }
  resolve(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ):  Observable<any>  {
   const id=route.paramMap.get("element");
   if(id){
    return this.taskservice.gettaskdetails(id)
   

   }else{
return of(this.gettaskdetails());
   }
  }
  gettaskdetails(){
    return{
      Taskid: 0,
      tname: '',
      des: '',
      sdate: '',
      edate: '',
      status: '',
      userid:0
    }
  }
}
