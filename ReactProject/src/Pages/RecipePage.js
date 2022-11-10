import { useEffect, useState } from "react";
import  {dataServiceObj}  from "../DataService";
import './Components/Contact.css';

function RecipePage() {
let [start,setStart]=useState([0]);
let [end,setEnd]=useState([10]);
let [isCompleted, setIsCompleted] = useState(false);
let  [customersArray, setCustomersArray] = useState([]);
    useEffect(()=>{
        dataServiceObj.getAllrecipies().then( response =>  
            { 
                setCustomersArray( response.data);
                //console.log(customersArray);
            } );  
      }
    
    );
   
 /* function getDataClick()
  {  
        dataServiceObj.getAllrecipies().then( response =>  
        { 
            setCustomersArray( response.data);
            console.log(customersArray);
        } );  
       
        
  }*/
  function getData(){
    
     setStart(start+5);
     setEnd(end+5);
     console.log(start);
     console.log(end);
      }
      

  
      
  let result  =  customersArray.slice(start,end).map( (item, index) =>  
  { 
    /*<div style={{backgroundColor:"burlywood",textAlign:"center",height:"600px" ,margin:"20px"}}>                 
    <img  style={{width:"200px",height:"100px",textAlign:"center"}}src={item.src} /><br></br>              
    <p>{item.name}</p>
</div>*/
return <span style={{height:"800px",backgroundColor:"gray"}}><div style={{backgroundColor:"burlywood",textAlign:"center",width:"200px",height:"250px" ,margin:"5px 20px", float:"left"}}>                
    <img  style={{width:"200px",height:"200px",textAlign:"center"}}src={item.src} /><br></br>              
<td> {item.name}  </td>                
</div>
</span>
    
  });
    return (
       <div>
        <br></br>


              {result}       
              <button  style={{float:"right",marginBottom:"5px"}} className="btn btn-primary" onclick={getData}>Load More</button>
      </div>
    );
    }
  
  export default RecipePage;

 