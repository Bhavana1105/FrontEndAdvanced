import { useState } from "react";
import  dataServiceObj  from "./Assignmnet2_DataServices";

function Demo11() {

    let  [empsArray, setEmpsArray] = useState([]);
    const [Empno, setEmpno] = useState("");
    const [Ename, setEname] = useState("");
    const [Job, setJob] = useState("");
    const [Deptno, setDeptno] = useState("");

   
  function getDataClick()
  {  
        dataServiceObj.getData().then( response =>  
        { 
            setEmpsArray( response.data );
        } );  
  }

     
  function addDataClick()
  {  
        let empsObj = {};
        empsObj.Empno = Empno;
        empsObj.Ename = Ename;
        empsObj.Job = Job;
        empsObj.Deptno=Deptno;

        dataServiceObj.addEmp( empsObj ).then( response => 
          {
              alert("New Dept details are added to server");
              getDataClick();           
          } );


  }


  function removeDeptClick(dno)
  {  
        dataServiceObj.deleteEmp(dno).then( response =>  
        { 
          alert("Selected Dept details are deleted from server");
          getDataClick();                  
        } );  
  }
   
  function selectDeptClick(dno)
  {   
        dataServiceObj.getEmpById(dno).then( response =>  
        { 
               let empsObj = response.data;
               setEmpno(empsObj.Empno);         
               setEname(empsObj.Ename);         
               setJob(empsObj.Job);   
               setDeptno(empsObj.Deptno);
        } );  
  }

  function updateDataClick()
  { 
    let empsObj = {};
    empsObj.Empno = Empno;
    empsObj.Ename = Ename;
    empsObj.Job = Job;
    empsObj.Deptno=Deptno;

      dataServiceObj.updateEmp( empsObj ).then( response => 
      {
          alert("Selected Dept details are updated in server");
          getDataClick();           
      } );
 
  }

  let result  =  empsArray.map( (item, index) =>  
  {
    return <tr>                
             <td> {item.Empno}  </td>  
             <td> {item.Ename}  </td>                
             <td> {item.Job}  </td>  
             <td> {item.Deptno}  </td>  

             <td>
               <a href="#" onClick={ () => removeDeptClick(item.Empno)}> Delete </a>  |   
               <a href="#" onClick={ () => selectDeptClick(item.Empno)}> Select </a>  |   
          </td>
        </tr>
  });
    return (
       <div> 
            <h3>Making HTTP Request using Axios Package</h3>
            <hr/>

            <input type="text" value={Empno} placeholder="Employee number"  
            onChange={(e) => setEmpno(e.target.value)}   />

            <input type="text" value={Ename} placeholder="Employee Name"  
            onChange={(e) => setEname(e.target.value)}   />

            <input type="text" value={Job} placeholder="Location"  
            onChange={(e) => setJob(e.target.value)}   />
             <input type="text" value={Deptno} placeholder="Department Number"  
            onChange={(e) => setDeptno(e.target.value)}   />
            <br/><br/>  
            <button onClick={getDataClick}>Get Depts</button>
            <button onClick={addDataClick}>Add Dept</button>
            <button onClick={updateDataClick}>Update Dept</button>
            <br/><br/>
            <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>Employee Number</th>
                  <th>Employee Name</th>                
                  <th>Job</th>
                  <th>Department Number</th>
              </tr>
              </thead>

              <tbody>
              {result}  
              </tbody>               
            </table>         
      </div>
    );
  }
  
  export default Demo11;

 