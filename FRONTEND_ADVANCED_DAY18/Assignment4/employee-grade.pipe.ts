import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from './grades/EmployeeModel';

@Pipe({
  name: 'employeeGrade'
})
export class EmployeeGradePipe implements PipeTransform {

  transform(input:number): string{
    let result:string="";
     // console.log(item.grade);
   switch(input)
   {
   case 1:
     result= "Outstanding";break;
     
    case 2:
      result="Excellent";break;
    
    case 3:
      result="Good"; break;
    
    case 4:
      result="Average";break;
 

   }
   //console.log(result);
   return result;
   
  }
  //console.log(result);
 // return result;
}

