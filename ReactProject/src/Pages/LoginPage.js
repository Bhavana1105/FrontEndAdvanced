
import {  useState } from 'react';
import RegistrationPage from './RegistrationPage';
import {useNavigate} from "react-router-dom";
import RecipePage from './RecipePage';
 
function LoginPage()
{
    const [result, setResult] = useState("");
    const [uid, setUid] = useState("");
    const [pwd, setPwd] = useState("");

    let navigate = useNavigate();

    const [errors, setErrors] = useState({  
            uid  :  "",            
            pwd  :  "",            
    });
    function GetLogin(){
        if(uid=="Admin" &&pwd=="Admin123"){
        navigate("/RecipePage");
        }
        else{
           // alert("Invalid Details");
            navigate("/LoginPage");
            // setResult("Invalid Details");
        }
    }
    function onSubmitClick(event)
    {
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.uid =  (uid=="Admin")? " " : "Incorrect Username";
        tempErrorObj.pwd =  (pwd=="Admin123")? " " : "Incorrect Password";

        
        setErrors(tempErrorObj);
    }
    return (
        <div style={{height:"290px",backgroundColor: "rgb(253, 225, 189)"}}>
            <fieldset  style={{margin:"auto"}}><br></br>
                <legend style={{textAlign:"center",margin:"10px opx"}}>User Login</legend><br></br><br></br>

                <form   style={{textAlign:"center"}} onSubmit={onSubmitClick}  noValidate>

                 User Name  :  <input type="text" name="uid" onChange={(e) => setUid(e.target.value)}  /><br></br>
                 <span  style={{marginLeft:"130px"}}className="error">{errors.uid}</span>
                <br></br>

                 Password  :  <input type="password" name="pwd" onChange={(e) => setPwd(e.target.value)}  /><br></br>
                 <span  style={{marginLeft:"130px"}}className="error">{errors.pwd}</span>
                <br></br>
                 <button style={{backgroundColor:"green",color:"white",marginLeft:"80px",width:"100px"}} onClick={GetLogin}>Login</button>
                    <h3>{result}</h3>
                </form>  
            </fieldset>
            </div>
    );   
}


export default LoginPage;