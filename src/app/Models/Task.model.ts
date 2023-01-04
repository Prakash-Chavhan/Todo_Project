import { UserserviceService } from "../_services/userservice.service";

export interface Task {
    Taskid:number,
    tname:string,
    des:string,
    sdate:string,
    edate:string,
    status:string,
    userid:number
} 