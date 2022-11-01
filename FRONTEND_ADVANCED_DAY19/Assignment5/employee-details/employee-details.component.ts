import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent{
public result:any[]=[];
  public data:any[]=[];
    constructor(private httpObj:HttpClient) 
  {
           
    
  }
  public Get_Data(){
    let url="http://localhost:3000/EmpData";
            this.httpObj.get(url).subscribe((response:any)=>{
                console.log(response);
                this.result=response;
            });
  }


}
