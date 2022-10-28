
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    uid:string  = "";
    pwd:string  = "";
    result:string  = "";
    isButtonDisable = false;
    count:number = 0;

    isValidUser():void
    {     
      var temp=document.getElementById('res');
      if(temp!=null){
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        this.result  = "Welcome to Admin";
        temp.style.setProperty('color', 'green');

      }
      else
      {
        this.count++;
        this.result  = "Invalid user id or password";
        temp.style.setProperty('color', 'red');

       // alert(this.count);
        if(this.count == 3)
        {
          this.isButtonDisable = true;
        }
      }

      
    }
    }
}
