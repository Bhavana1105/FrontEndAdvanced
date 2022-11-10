import './Contact.css';
function Footer(){
    return(
        <footer class="container-fluid">
        <div class="f-left">
               <p class="big">Ready to cook ?</p>
               <p>Sign up for our weekly newsletters!</p>
               <input type="email" id="email-id" placeholder="Enter your email"></input>
               <button type="submit" value="submit" id="subscribe">Subscribe</button><br></br>
         </div>
                <div class="f-right">
                  <p>LET'S BE FRIENDS!</p>
                  <div class="icons">
                     <ul class="socialmediaicons">
                       <li><i class="fa fa-facebook"></i></li>
                       <li><i class="fa fa-instagram"></i></li>
                       <li><i class="fa fa-twitter"></i></li>
                       <li><i class="fa fa-youtube"></i></li>
                     </ul>
                   </div>
                    <p class="text-light">Copyright &copy; 2022 @ Team 4</p>

                </div>


    </footer>
    );

}
export default Footer;