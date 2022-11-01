import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataArray:any[] = [];
  public url:string  =  "http://localhost:3000/students/";
  
  constructor(private  httpObj:HttpClient) {
    
  }

  getAllStudents():Observable<any>
  {     
      return this.httpObj.get(this.url);
  }

  getStudentById(id:number):Observable<any>
  {       
      return this.httpObj.get(this.url + id);
  }

  addStudent(studentObj:any):Observable<any>
  {   
      return this.httpObj.post(this.url , studentObj);
  }

  updateStudent(studentObj:any):Observable<any>
  {     
      return this.httpObj.put(this.url + studentObj.studentId, studentObj);
  }

  deleteStudent(id:number):Observable<any>
  {     
      return this.httpObj.delete(this.url + id);
  }
}
