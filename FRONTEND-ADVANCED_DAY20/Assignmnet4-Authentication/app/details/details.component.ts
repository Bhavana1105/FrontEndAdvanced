import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empObj:any = {};

  public emps:any[]  = [
    {empno: 1025, ename : "Scott", job : "Manager", sal : 56000},
    {empno: 1026, ename : "Smith", job : "Sr.Manager", sal : 65000},
    {empno: 1027, ename : "Sandy", job : "Lead", sal : 45000},
    {empno: 1028, ename : "Sam", job : "Group Manager", sal : 75000},
  ];


    constructor(private  activatedRouteObj: ActivatedRoute)
		{
       
		}


  ngOnInit(): void {
    let eno = this.activatedRouteObj.snapshot.params["id"];
    this.empObj =  this.emps.find(item => item.empno == eno);
  }
  
}
