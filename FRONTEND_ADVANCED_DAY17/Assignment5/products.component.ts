import { Component} from '@angular/core';
import {ProductModel} from './ProductModel'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   show:boolean=false;
  id:number=0;
  name:string="";
  price:number=0;
  category:string="";
  quantity:number=0;
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
     {id:3,name:"Prd3",price:3000,category:"cat3",quantity:3}];
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

}
