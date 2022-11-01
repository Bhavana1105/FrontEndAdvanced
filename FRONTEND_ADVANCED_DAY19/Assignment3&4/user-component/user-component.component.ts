import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
//https://reqres.in/api/users
export class UserComponentComponent implements OnInit { ;
  public result:any[]=[];
  public data:any[]=[];
    constructor(private httpObj:HttpClient) 
  {
           
    
  }
  public Get_Data(){
    let url="https://reqres.in/api/users";
            this.httpObj.get(url).subscribe((response:any)=>{
                console.log(response.data);
                this.result=response.data;
            });
  }
  public cust_Data(){
    let url="https://www.w3schools.com/angular/customers.php";
    this.httpObj.get(url).subscribe((response:any)=>{
        console.log(response.records);
        this.data=response.records;
    });
    
  }

  ngOnInit(): void {
  }

}
