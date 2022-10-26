
function App() {
  // App  Logic 
 
  let productObj=[{name:"oppo f15",category:"A" ,price:20000, unitsInStock:10},
  {name:"oppo f16",category:"B" ,price:50000, unitsInStock:8},
  {name:"oppp f12",category:"C",price:12000, unitsInStock:0},
  {name:"oppp f14",category:"B",price:40000, unitsInStock:2},
  {name:"oppp M21",category:"A",price:90000, unitsInStock:5},
  {name:"oppp M20",category:"A",price:80000, unitsInStock:0},
];
let cust_details=[{name:"Bhavana" ,city:"Nellore",age:21},
{name:"Vineela" ,city:"Chirala",age:25},
{name:"Anu" ,city:"Hyderabad",age:21}];


  let result  =  productObj.map( item =>  
    {
      return <tr> 
               <td> {item.name}  </td>  
               <td> {item.category}  </td>  
               <td> {item.price}  </td>  
               <td> {item.unitsInStock}  </td>  
          </tr>
    });
    let data  =  cust_details.map( item =>  
      {
        return <p>
          Name:{item.name}&nbsp;
          City:{item.city}&nbsp;
          Age:{item.age}&nbsp;
       </p>
      });
  return (
     <div>
          <h3> Developing React Applications - Processing Arrays </h3> 
          <hr/>

          <table border="2"  width="500">
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Units In Stock</th>
            </tr>

            {result}

          </table>
    <div>
      <h3>Customer Details</h3>
      </div>
      {data}
      </div>
  );
}


export default App;