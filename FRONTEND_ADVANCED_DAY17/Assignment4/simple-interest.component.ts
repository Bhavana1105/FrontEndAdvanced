import { Component} from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent  {
  amount:number=0;
  interest:number=0;
  timePeriod:number=0;
  result:number=0;
  calSI():void{
     this.result=(this.amount*this.interest*this.timePeriod)/100;
  }

}
