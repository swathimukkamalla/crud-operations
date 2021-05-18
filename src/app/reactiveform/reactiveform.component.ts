import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  employees: Employee[] = [];
  employeedata: Employee = new Employee();
  id: any;

  // country=["INDIA","USA","MALASIA","LUKNOW","MAYANMAR"];
  // states=["Ap","TS","TN","MH"];
  // city=["abc","xyz","123","mno"]

  constructor(
    private service: ServiceService,
    private router: Router,
    public actRoute: ActivatedRoute
  ) {}
  regform: FormGroup;
  initializeForm() {
    this.regform = new FormGroup({
      
      fname: new FormControl(this.employeedata.fname, [Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      lname: new FormControl(this.employeedata.lname, [Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      email: new FormControl(this.employeedata.email, [Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      dateofBirth: new FormControl(this.employeedata.dateofBirth, Validators.required),
      age:new FormControl(this.employeedata.age,Validators.required),
      gender: new FormControl(this.employeedata.gender, Validators.required),
      occupation: new FormControl(this.employeedata.occupation,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      maritalStatus: new FormControl(this.employeedata.maritalStatus, Validators.required),
      tNum1: new FormControl(this.employeedata.tNum1, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      tNum2: new FormControl(this.employeedata.tNum2, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      address: new FormControl(this.employeedata.address,[Validators.required,Validators.minLength(20),Validators.maxLength(100)]),
      pincode: new FormControl(this.employeedata.pincode, [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      country: new FormControl(this.employeedata.country, [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      state: new FormControl(this.employeedata.state, Validators.required),
      city: new FormControl(this.employeedata.city, Validators.required),
      reffered: new FormControl(this.employeedata.reffered, [Validators.required,Validators.minLength(10),Validators.maxLength(20)])
    });

  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    this.initializeForm();
    this.service.getEmployee(this.id).subscribe((data: Employee) => {
      this.employeedata = data;
      this.regform.patchValue(data);
      // this.initializeForm();
    });
    // console.log(this.regform.value);
  }
  

  oncreate(data: any) {
    this.service.createlist(data).subscribe((data: any) => {
      this.router.navigate(['/display']);
      
    });
  }
  updateData(data: any) {

    this.service.updateEmployee(this.regform.value, this.id).subscribe(() => {
      this.router.navigate(['/display']);
      // console.log(data);
    });
  }
}
