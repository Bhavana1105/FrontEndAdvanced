import photo2 from './Images/photo-2.jpg';

function ContactPage(){
    return(
        <main>
        <section id="about-info" className=" py-3"  style={{backgroundColor: "rgb(253,225,189)"}}>
        <div className="container-1">
          <div className="info-left">
            <h1 className="l-heading"><span className="text-primary1">Head Quarters:</span> </h1>
               <p>QTown Business Solutions,Workafella Business Center,Cyber Crown Sector-2 ,Village HUDA Techno Enclave,Madhapur,Hyderabad, Telangana - 500081.</p>    
                <p><span className="text-sec">Phone:</span> +91(720) 710 7334</p>
                <p><span className="text-sec">Email:</span> simplyrecipe@demo.org</p>
          </div>
          <div className="info-right">
            <img src={photo2} alt="hotel"></img>
            </div>
          </div>
    
      </section>
      <section id="sign-up" className="py-3" style={{backgroundColor: "rgb(253,225,189)"}}>
        <div className="container-1" id="sign-up">
               <h1>ASK A QUESTION</h1><br></br>
               <form  method="post" action="#">
                 <input type="text" id="cname" name="cname" placeholder="Your Name:"/><br></br><br></br>
                 <input type="text" id="email" name="email" placeholder="Your E-mail:"/><br></br><br></br>
                 <textarea name="query" id="query" cols="50" placeholder="Your Query:"></textarea><br></br><br></br>
                 <button type="submit" id="submit">Submit</button>
    </form>
        </div>
    </section>
      
       
      <section id="section-3" className="py-3">
        <div className="container-1">
          <div className="section-3 bg_primary1">
            <h2 className="l-heading">Work with us</h2>
           <p>Join our team of top-notch editors, designers, marketers, and others as we continue to make a difference every day in the lives of Simply Recipes readers</p>
           <a href="#">View Job Openings</a>
        </div>
    
          <div className="section-3 bg_primary1">
            <h2 className="l-heading">Write for us</h2>
            <p>We are always on the lookout for new expert voices to join our team of recipe developers and writers. Please submit pitches along with three examples of your published work (print or online) and a brief bio to <a href="#">write@redchef.com</a></p>
        </div>
    
        <div className="section-3 bg_primary1" id="last-item">
            <h2 className="l-heading">Advertise with us</h2>
            <p>Simply Recipes offers the highest value to advertisers through a combination of scale, credibility, and intent. Interested in advertising with us? Email us at <a href="#">advertise@redchef.com</a> or check out our media kit to learn more.</p>
            </div>
        </div>
    </section>


      </main>
    );

}
export default ContactPage;