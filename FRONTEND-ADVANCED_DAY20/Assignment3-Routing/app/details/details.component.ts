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
    {
      "Empno": 10,
      "Ename": "Bhavana",
      "Job": "Consulting",
      "Deptno": 123
    },
    {
      "Empno": 11,
      "Ename": "Sruthi",
      "Job": "Audit",
      "Deptno": 124
    },
    {
      "Empno": 12,
      "Ename": "Vineela",
      "Job": "Enabling Areas",
      "Deptno": 125
    },
    {
      "Empno": 13,
      "Ename": "Anuhya",
      "Job": "Tax",
      "Deptno": 125
    },
    {
      "Empno": "15",
      "Ename": "vani",
      "Deptno": "126",
      "Job": "Enabling Areas"
    },
    {
      "Empno": "16",
      "Ename": "pushpa",
      "Deptno": "125",
      "Job": "tax"
    },
    {
      "Empno": "23",
      "Ename": "hxbdbcuidb",
      "Deptno": "12",
      "Job": "Audit"
    },
    {
      "Empno": "34",
      "Ename": "kkjhgdhrbh",
      "Deptno": "54",
      "Job": "consulting"
    }
  ];



    constructor(private  activatedRouteObj: ActivatedRoute)
		{
       
		}


  ngOnInit(): void {
    let eno = this.activatedRouteObj.snapshot.params["Empno"];
    this.empObj =  this.emps.find(item => item.Empno == eno);
  }
  
}
