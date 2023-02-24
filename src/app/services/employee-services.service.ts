import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor( private http : HttpClient) { }
  baseUrl="http://localhost:8080";
  getData():Observable<any>{
   return this.http.get(this.baseUrl + "/all");
  }
  addEmpData(body:any):Observable<any>{
return this.http.post(this.baseUrl + "/empadd", body);
  }
  deleteData(empId:any):Observable<any>{
    return this.http.delete(this.baseUrl + "/del"+empId)
  }
  public updateEmployee(empId:number,employee: Employee): Observable<any> {
    return this.http.put(this.baseUrl+"/update/"+empId,employee);
  }
}
