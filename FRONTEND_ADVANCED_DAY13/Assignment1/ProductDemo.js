var  productModule  =  require("./productModule");
let products=productModule.getProducts();
function displayData(products){
    for(let items of products){
        let  str  =  `ProductName :  ${items.name},   Category:  ${items.category} , Price :  ${items.price}, Units in stock : ${items.unitsInStock}`;
        console.log(str);
        }
}

displayData(products);
displayData(productModule.getByCategory("A"));
displayData(productModule.getByPrice(10000,50000));
displayData(productModule.OutOfStock());
displayData(productModule.InStock());