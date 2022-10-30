
import { Component} from '@angular/core';
import {ProductModel} from './ProductModel'
@Component({
  selector: 'app-user-interaction',
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.css']
})
export class UserInteractionComponent {
   show:boolean=false;
   start:number=0;
   end:number=4;
  id:number=0;
  name:string="";
  price:number=0;
  category:string="";
  quantity:number=0;
  isdisabled:boolean=false;
  public productArray:ProductModel[]=[];
   getProducts():void{
  /* var temp= document.getElementById('main');
   if(temp!=null){
   // alert("hi");
    temp.style.display="inline";
   }
     //alert(this.show);*/
     this.productArray = [{id:1,name:"Prd1",price:1000,category:"cat1",quantity:1},
     {id:2,name:"Prd2",price:2000,category:"cat2",quantity:2},
     {id:3,name:"Prd3",price:3000,category:"cat3",quantity:3},
     {id:4,name:"Prd4",price:4000,category:"cat4",quantity:4},
     {id:5,name:"Prd5",price:5000,category:"cat5",quantity:5},
     {id:6,name:"Prd6",price:6000,category:"cat6",quantity:6},
     {id:7,name:"Prd7",price:7000,category:"cat7",quantity:7},
     {id:8,name:"Prd8",price:8000,category:"cat8",quantity:8},
     {id:9,name:"Prd9",price:9000,category:"cat9",quantity:9},
     {id:10,name:"Prd10",price:10000,category:"cat10",quantity:10},
     {id:11,name:"Prd11",price:11000,category:"cat11",quantity:11},
     {id:12,name:"Prd12",price:12000,category:"cat12",quantity:12},
  ];
}
   addProducts():void{
 let prodObj:ProductModel = new ProductModel();
      prodObj.id = this.id;
      prodObj.name = this.name;
      prodObj.price =  this.price;
      prodObj.category =  this.category;
      prodObj.quantity=  this.quantity;
      this.productArray.push( prodObj );
   }
   updateProduct():void{
    let prodObj:any = this.productArray.find( item => item.id == this.id);
    prodObj.name = this.name;
    prodObj.price =  this.price;
    prodObj.category =  this.category;
    prodObj.quantity=  this.quantity;
   }
   reset():void{
        this.id=0;
        this.name="";
        this.category="";
        this.price=0;
        this.quantity=0;
   }
   deleteProduct(id:number):void{
    let index=this.productArray.findIndex(item=>item.id==id);
    this.productArray.splice(index,1);
   }
   selectProduct(id:number):void{
    let prodObj:any=this.productArray.find(item=>item.id==id)
    this.id=prodObj.id;
    this.name=prodObj.name;
    this.price=prodObj.price;
    this.category=prodObj.category;
    this.quantity=prodObj.quantity;
   }
   LoadMore(){
   // this.start+=4;
    this.end+=4;
    if(this.end>=this.productArray.length){
 this.isdisabled=true;
    }
   }

}
