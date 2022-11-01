import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
  public usersArray:any[] =  [];

  constructor(private  httpObj:HttpClient) {
    
  }

  // https://www.w3schools.com/angular/customers.php

  public button1Click()
  {
    let url =  "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe( (response:any) => 
    {
      console.log(response.data);
      this.usersArray = response.data;
    });
  }
}