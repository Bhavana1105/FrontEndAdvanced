import { Component} from '@angular/core';
import { DataService } from './data.services';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent  {
  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;

  public studentsArray:any[] =  [];

  constructor(private  serviceObj:DataService) {
    
  }

 
  public getData_click()
  {	 
       this.serviceObj.getAllStudents().subscribe( (response:any) =>
       {
          this.studentsArray = response;
       });
  }

  public addData_click()
  {	 
    let stObj:any = {};
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;


    this.serviceObj.addStudent(stObj).subscribe( (response:any) =>
    {
      // this.studentsArray = response;
      alert("New Student details are added to server");
      this.getData_click();
    });
  }
  public clearFields(){
    let stObj:any = {};
    //this.studentId = undefined;
    this.name = "";
    this.city = "";
    this.email ="";
    this.age = 0;
  }


  public selectData_click(id:number)
  {	 
       this.serviceObj.getStudentById(id).subscribe( (resData:any) =>
       {
        this.name = resData.name;
        this.email = resData.email;
        this.city = resData.city;
        this.age = resData.age;
       });
  }

  public deleteData_click(id:number)
  {	 
       this.serviceObj.deleteStudent(id).subscribe( (resData:any) =>
       {
        alert("Selected Student details are deleted from  server");
        this.getData_click();
       });
  }

  public updateData_click(id:number)
  {	 
    /*if(this.studentId==0){
      alert("select a student Id to update");
    }
  else{*/
  var temp=this.studentsArray.find((item)=>item.studentId==id);
    this.serviceObj.updateStudent(temp).subscribe( (resData:any) =>
    {
      //console.log(resData);
      temp.name=this.name;
       temp.email=this.email;
        temp.city=this.city;
       temp.age=this.age;
      
    });
  }
       
  }





