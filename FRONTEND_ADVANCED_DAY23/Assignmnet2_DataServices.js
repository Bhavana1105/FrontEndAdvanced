import axios from "axios";
let dataServiceObj={};
let url="http://localhost:3500/EmpData/";
let temp="?_sort=Empno&_order=asc";
//let temp="?_sort=Empno&_order=desc"

dataServiceObj.getData=function()
{
    return axios.get(url+temp);
};
dataServiceObj.getEmpById=function(id){
    return axios.get(url+id);
};

dataServiceObj.addEmp =  function(empObj)
{    
    return axios.post(url, empObj);
};

dataServiceObj.updateEmp=  function(empObj)
{    
    return axios.put(url + empObj.Empno, empObj);
};

dataServiceObj.deleteEmp=  function(id)
{    
    return axios.delete(url + id);
};
export default dataServiceObj;