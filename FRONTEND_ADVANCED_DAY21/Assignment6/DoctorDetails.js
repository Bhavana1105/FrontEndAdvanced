
function DoctorDetails(props) {  
  var rating=[];
  for(let i=0;i<props.doctorObj.rating;i++){
    rating.push(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniufTNAz0-Cr7jGgnUYfuqfsb0T2adP-5ZfTq-PU&s" width="20" height="20"/>)
    }
    //console.log(props);
      return (
         <div style={{float : "left", width : "200px",border:"1px solid gray", padding : "5px", margin : "5px",textAlign:"center"}}> 
         <img src={props.doctorObj.src} style={{width:"100px",height:"100px",border:"1px solid gray"}} alt="Images"></img>
             <p>{props.doctorObj.name}</p> 
             <p> {props.doctorObj.role} </p>
             <span>{rating}</span>
             <button style={{borderRadius:"10px",border:"1px solid gray"}}>BOOK APPOINTMENT</button>
        </div>
      );
    }
    
    export default DoctorDetails;
  
  
   