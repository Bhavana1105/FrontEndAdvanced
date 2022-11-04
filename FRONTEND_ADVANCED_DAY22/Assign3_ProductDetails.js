import {useState} from "react"; 
function ProductDetails(){
    let [name,setName]=useState("");
    let [price,setPrice]=useState("");
    let [quantity,setQuantity]=useState("");
    let[result,setResult]=useState("");
 function inputNameChange(event){
    setName(event.target.value);
 }
 function inputPriceChange(event){
    setPrice(event.target.value);
 }
 /*function inputQuantityChange(event){
    setQuantity(event.target.value);
 }*/
 function calculateAmount(){
    let str="Total amount to be paid :"
    setResult(str+price* quantity);
 }
 return(
    <>
        <h3>Enter Product Details</h3>
        <fieldset>
         <input type="text" placeholder="Product Name" onChange={inputNameChange} /><br></br><br></br>
         <input type="text" placeholder="Product Price" onChange={inputPriceChange} /><br></br><br></br>
         <input type="text" placeholder="Product Quantity" onChange={e=>setQuantity(e.target.value)} /><br></br><br></br>
        <input type="button" value="Calculate Amount" onClick={calculateAmount} /><br></br><br></br>
        <hr/>
        </fieldset>
        <p>Product Name: {name}</p>
        <p>{result}</p>

        </>
 );


}

export default ProductDetails;