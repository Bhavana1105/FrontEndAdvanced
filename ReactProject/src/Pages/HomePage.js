import photo2 from './Images/photo-2.jpg';
import pic1 from "./Images/Let's+get+cooking.png";
import pic2 from "./Images/ichiraku-uncle.jpg";

function HomePage(){
 return(
  <section style={{backgroundColor:" rgb(253, 225, 189)"}} className="container-fluid">
  <div className="row">
    <article className="col-sm-12" style={{border: "2px solid black"}}>
      <div>
        <h3 className="p-2 m-2">Welcome</h3>
        <table>
          <tr>
            <td className="p-2 m-2"><img src={
              pic2} alt="Ramen Guy" height="150px" width="150px"/></td>
            <td className="p-2 m-2"><p><strong>Lorem ipsum</strong>, dolor sit amet consectetur adipisicing elit. Omnis, modi ratione cupiditate accusamus aliquam itaque, ipsum numquam cum aspernatur obcaecati, ipsam dolorum? Amet, possimus. Optio, in blanditiis ut itaque dicta fugit eius quos, ea, consectetur fuga cupiditate? Saepe laboriosam non quod iste repellendus unde suscipit. Quidem qui reiciendis laudantium ut?</p></td>
          </tr>
          <tr>
            <td></td>
            <td style={{textAlign:"center"}} ><a href="#" className="btn btn-warning text-white text-center" 
            role="button">Want to know more about us?</a></td>
          </tr>
        </table>
      </div>

      <hr/>
      
        <div>
          <h3 style={{fontFamily: "cursive"}}>What are you waiting for?</h3>
          <img src={pic1 }alt="let's get cooking" style={{maxWidth:"800px"}}/>
        </div>
    </article>
    </div></section>
 );
}
export default HomePage;