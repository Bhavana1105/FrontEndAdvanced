import { useState } from "react";

function Employees() {

    let  [empsArray, setEmpsArray] = useState([]);
    let [ename, setEname] = useState("");
    let [empno, setEmpno] = useState("");
    let [deptno, setDeptno] = useState("");

     
 

  function getEmpsClick()
  {

    let tempArray  = [     
      {  empno : 10256, ename:"Scott", deptno : 10  },
      {  empno : 10257, ename:"Smith", deptno : 20  },
      {  empno : 10258, ename:"Sandy", deptno : 30  },
      {  empno : 10259, ename:"Sam", deptno : 40  },
  ];

    setEmpsArray(  tempArray );
    
  }
   

  function addEmpClick()
  {
    let empObj = {};
    empObj.empno = empno;
    empObj.ename = ename;
    empObj.deptno = deptno;

    let tempArray = Object.assign([], empsArray);
    tempArray.push(empObj);     
    setEmpsArray( tempArray );
  }
  
  function removeEmpClick(eno)
  {    
    let tempArray = Object.assign([], empsArray);
    let index = tempArray.findIndex(item => item.empno == eno); 
    tempArray.splice(index, 1);
    setEmpsArray( tempArray );
  }
  function selectEmpClick(eno)
  {   
    let empObj=empsArray.find(item=>item.empno==eno);
    setEmpno(empObj.empno);
    setEname(empObj.ename);
    setDeptno(empObj.deptno);
  }
  function updateEmpClick(eno)
  {    
    let tempArray = Object.assign([], empsArray);
    let index = tempArray.findIndex(item => item.empno == eno); 
    if(empno=="" ||ename==""||deptno==""){
      alert("Please enter values to update");
    }else{
    tempArray[index].empno=empno;
    tempArray[index].ename=ename;
    tempArray[index].deptno=deptno;
    setEmpsArray( tempArray );
    }
  }


 
    let result  =  empsArray.map( (item, index) =>  
      {
        return <tr>                
                 <td> {item.empno}  </td>  
                 <td> {item.ename}  </td>                
                 <td> {item.deptno}  </td> 
                 <td>
          <a href="#" onClick={ () => removeEmpClick(item.empno) }>Remove</a> &nbsp;
          <a href="#" onClick={ () => selectEmpClick(item.empno) }>Select</a> &nbsp; 
          <a href="#" onClick={ () => updateEmpClick(item.empno) }>Update</a> &nbsp; 
 
                  </td> 
            </tr>
      });
     
  
  
    return (
       <div> 
            <h3>Dynamic Operations on Array of Object</h3>
            <hr/>

            <input  value={empno} placeholder="empno"   onChange={e => setEmpno(e.target.value)}  />
            <input value={ename} placeholder="ename" onChange={e => setEname(e.target.value)}  />
            <input  value={deptno} placeholder="deptno" onChange={e => setDeptno(e.target.value)}  />
            <br/><br/>

            <button onClick={getEmpsClick}>Get Emps</button>
            <button onClick={addEmpClick}>Add Emp</button>
            <br/><br/>
            <table border="2"  width="500">
              <tr>
                <th>Empno</th>
                <th>Emp Name</th>               
                <th>Deptno</th>
                <th></th>
              </tr>
  
              
              {result}
      
           
  
            </table>
  
  
      </div>
    );
  }
  
  export default Employees;

 