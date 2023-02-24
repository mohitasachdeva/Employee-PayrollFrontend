import { Component } from '@angular/core';
import { FormArray, FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { Employee } from 'src/app/Model/employee';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  employeeForm: FormGroup;


departments: Array<any> = [
  { id: 1, name: "HR", value: "HR", checked: false },
  { id: 2, name: "Sales", value: "Sales", checked: false },
  { id: 3, name: "Finance", value: "Finance", checked: false  },
  { id: 4, name: "Engineer", value: "Engineer", checked: false },
  { id: 5, name: "Other", value: "Other", checked: false }
]

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private httpService:EmployeeServicesService ) {

    this.employeeForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)]),
      profilePic: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      department: new FormArray([], Validators.required),
      salary: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required)
    })
   }


   onDepartmentChange(event: any){
    const departmentValue = event.source.value
    const selectedDepartment = event.checked
    const departmentArray: FormArray = this.employeeForm.get('department') as FormArray;


    if (selectedDepartment) {
      departmentArray.push(new FormControl(departmentValue));
    } else {
      const index = departmentArray.controls.findIndex(x => x.value === departmentValue);
      departmentArray.removeAt(index);
    }
  }


  /**
   * To read Salary value from slider
   */
  salary: number = 400000;
  updateSetting(event: any) {
    this.salary = event.value;
  }


  formatLabel(value: any) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  public employee: Employee = new Employee();
  submitForm(){
    console.log(this.employeeForm.value)
    this.httpService.addEmpData(this.employee).subscribe(response => {
      console.log(response)
      
    })

  }
  resetForm(){
    this.employeeForm.reset()
  }

  }
