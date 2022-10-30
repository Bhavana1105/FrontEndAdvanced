import { Component} from '@angular/core';
import {EmployeeModel} from './EmployeeModel'

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent  {
   public arr:EmployeeModel[]=[
    {sno:1,name:"scott",grade:1},
    {sno:2,name:"abrons",grade:2},
    {sno:3,name:"smith",grade:3},
    {sno:4,name:"james",grade:4},
    {sno:5,name:"adam",grade:1},
    {sno:6,name:"sathya",grade:3},
    {sno:7,name:"maneesh",grade:4},
    {sno:8,name:"haneesh",grade:2},
  ]; 
}
