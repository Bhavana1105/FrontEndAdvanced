import {  useState } from 'react';
import './Components/Forms.css';
import {useNavigate} from "react-router-dom";
 import LoginPage from './LoginPage';
 import RecipePage from './RecipePage';
 import { Routes, Outlet, Route, Link, BrowserRouter as Router  } from 'react-router-dom';
function RegistrationPage()
    {
        const [result, setResult] = useState("");
        const [uname, setUname] = useState("");
        const [password, setPassword] = useState("");
        const [retypepassword, setretypePassword] = useState("");
        const [email, setEmail] = useState("");
        let navigate = useNavigate();
        const [errors, setErrors] = useState({  
                uname  :  "",            
                password  :  "",  
                retypepassword:"",          
                email :  ""
        });
        function onSubmitClick(event)
        {
            event.preventDefault();
            const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            let tempErrorObj = Object.assign({}, errors);
            tempErrorObj.uname =  (uname.length == 0)? "User Name is required..!" : "";
            tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
            tempErrorObj.retypepassword =  (retypepassword==password)? " " : "Password Mismatch";
            tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
            setErrors(tempErrorObj);
            let valuesArray = Object.values(tempErrorObj);
            let index  = valuesArray.findIndex( item => item.length != 0 );  
            console.log(index);
            if(index == 2)
            {
                    // Logic to send this data to server using AJAX 
                   // alert("hui");             
                  setResult("Submit button clicked --- Form Data is Valid"); 
                  navigate("/RecipePage");
            }
            else
            {           
               setResult("Invalid Data");
            }
        }
        return (
            <div  style={{backgroundColor: "rgb(253, 225, 189)",textAlign:"center",margin:"auto" ,paddingTop:"50px"}}>
    
                <fieldset style={{textAlign:"center" }}>
                    <legend>Enter Your Details</legend>
                    <br></br>
                    <br></br>
                    <form   onSubmit={onSubmitClick}  noValidate>
    
                     User Name  :  <input style={{marginLeft:"70px"}}type="text" name="uname" onChange={(e) => setUname(e.target.value)}  /><br/>
                     <span style={{marginLeft:"130px"}} className="error">{errors.uname}</span>
                     <br/>
    
                     Password  :  <input style={{marginLeft:"76px"}} type="password" name="password" onChange={(e) => setPassword(e.target.value)}  /><br/>
                     <span  style={{marginLeft:"150px"}}className="error">{errors.password}</span>
                     <br/>
                    RetypePassword  :  <input style={{marginLeft:"26px"}}type="password" name="retypepassword" onChange={(e) => setretypePassword(e.target.value)}  /><br/>
                     <span  style={{marginLeft:"130px"}}className="error">{errors.retypepassword}</span>
                     <br/> 
                     E-mail  :  <input  style={{marginLeft:"90px"}}type="text" name="email" onChange={(e) => setEmail(e.target.value)}  /><br/>
                 <span style={{marginLeft:"100px"}} className="error">{errors.email}</span>
                 <br/>
               {/* <form action="/LoginPage"><button style={{backgroundColor:"blue",color:"white",marginRight:"70px",width:"100px"}}>Register</button></form>*/}
               <button style={{backgroundColor:"blue",color:"white",marginRight:"70px",width:"100px"}}>Register</button>
                    <h3>{result}</h3>
        </form>
                </fieldset>
            </div>
        );   
    }
export default RegistrationPage;