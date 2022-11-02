function Assignment4() {
    // App  Logic 
    let  empsArrays =  [
      {sid:1234,sname:"Bhavana" ,course:"Angular" ,age:20,total:100},
      {sid:1235,sname:"Sruthi" ,course:"React" ,age:21,total:121},
      {sid:1254,sname:"Anuhya" ,course:"React" ,age:20,total:90},
      {sid:1234,sname:"Vineela" ,course:"Java" ,age:25,total:120},
      {sid:1233,sname:"Pushpa" ,course:"Angular" ,age:23,total:89},


  ];
   
  
    let result  =  empsArrays.map( (item,index) =>  
      {
        return <tr key="index" style={{ backgroundColor:(index%2==0)? "lightblue":"lightPink"}}>
                 <td> {item.sid}  </td>  
                 <td> {item.sname}  </td>  
                 <td> {item.course}  </td>  
                 <td> {item.age}  </td>  
                 <td> {item.total}  </td>  

            </tr>
      });
     
  
  
    return (
       <div>
            <h3> Developing React Applications - Student Details</h3> 
            <hr/>
  
            <table border="2"  width="500">
              <tr>
                <th>ID</th>
                <th>Emp Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Total</th>

              </tr>
  
              {result}
  
            </table>
  
  
      </div>
    );
  }
  
  export default Assignment4;