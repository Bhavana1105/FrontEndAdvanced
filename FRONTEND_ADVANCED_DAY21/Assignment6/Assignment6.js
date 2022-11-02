import DoctorDetails from "./DoctorDetails"

function Assignment6(){
  let doctorList=[
  {name:"Patey Criuser",role:"neurosurgeon",rating:4, src:"https://wallpaperaccess.com/full/5496283.jpg"},
  {name:"Mario Speedway",role:"Eye Specialist",rating:5,src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Anna Sthesia",role:"Dentist",rating:3,src:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Paul Moliv",role:"neurosurgeon",rating:3,src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"Anna Maul",role:"Urology",rating:4,src:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Gail ForceWind",role:"neurosurgeon",rating:4,src:"https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Patey Moliv",role:"neurosurgeon",rating:4,src:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Patey SpeedWay",role:"Dentist",rating:3,src:"https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg?auto=compress&cs=tinysrgb&w=600"},
  ];
  let result =  doctorList.map(item =>  
    {
      return <DoctorDetails doctorObj={item}   />
    });
    
  
  
    return (
       <div> 
              {result}
      </div>
    );
  }
  

export default Assignment6;