import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employeeId:number=10256;
  public employeeName:string="Scott";
  public employeeJob:string="Manager";
  public employeeSalary:number=75000;
  public employeeDeptNo:number=10;

  constructor() { }

  ngOnInit(): void {
  }

}
