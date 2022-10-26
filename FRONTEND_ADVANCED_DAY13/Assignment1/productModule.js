let productObj=[{name:"oppo f15",category:"A" ,price:20000, unitsInStock:10},
    {name:"oppo f16",category:"B" ,price:50000, unitsInStock:8},
    {name:"oppp f12",category:"C",price:12000, unitsInStock:0},
    {name:"oppp f14",category:"B",price:40000, unitsInStock:2},
    {name:"oppp M21",category:"A",price:90000, unitsInStock:5},
    {name:"oppp M20",category:"A",price:80000, unitsInStock:0},
]
exports.getProducts=function(){
    return productObj;
}
exports.getByCategory=function(p_category){
    let arr1=[];
        for(let item of productObj){
            if(item.category===p_category){
                arr1.push(item);
            }
        }
        //console.log(arr1);
        return arr1;
}
exports.getByPrice=function(min_price,max_price){
    let arr2=[];
        for(let item of productObj){
            if(item.price>=min_price&& item.price<=max_price){
                arr2.push(item);
            }
        }
        return arr2;
}
exports.OutOfStock=function(){
    let arr3=[];
        for(let item of productObj){
            if(item.unitsInStock==0){
                arr3.push(item);
            }

        }
        return arr3;

}
exports.InStock=function(){
    let arr4=[];
        for(let item of productObj){
            if(item.unitsInStock!=0){
                arr4.push(item);
            }

        }
        return arr4;

}
