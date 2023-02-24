import { Component } from '@angular/core';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public employee: Employee = new Employee();
  public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];
  employeeList: Employee[] = []
  constructor(private router:Router, private http:EmployeeServicesService){
  
  this.http.getData().subscribe(data=>{
    this.employeeDetails = data.data;
      this.employeeCount = this.employeeDetails.length;
        console.log(this.employeeDetails);
        console.log(data)
      })
    }
    deleteEmployee(employee: any) {
      if (confirm("Are you sure you want to delete this employee?")) {
        const index = this.employeeList.indexOf(employee);
        this.employeeList.splice(index, 1);
        this.employeeCount--;
        this.http.deleteData(employee.id);    }
    }
    updateEmployee(employee:any){
      this.router.navigate(['add-employee'])
      this.http.updateEmployee(employee.id,employee)
    }
  }
  
 
 
 
 



