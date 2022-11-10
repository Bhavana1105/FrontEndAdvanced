import redlogo from '../Images/redlogo.png';

function MainHeader(){
    return (
        <header>
           <div class="px-3 py-2 text-white" style={{backgroundColor: "burlywood", border: "2px solid black"}} >
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <img src={redlogo} alt="Header Image of main page" height="110px"/>

                <div>
                  <span style={{fontFamily: "cursive", fontSize:" xx-large", fontWeight: "bold"}}>&nbsp;Red Chef</span>
                  <p style={{fontSize: "small"}}>&nbsp;&nbsp;&nbsp;The power of real nutrients</p>
                </div>  
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 fs-5">
                <li>
                  <a href="/Home" className="nav-link text-dark fw-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/About" className="nav-link text-dark fw-bold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/RecipeDetailsPage" className="nav-link text-dark fw-bold">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="/Login" className="nav-link text-dark fw-bold">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/Registration" className="nav-link text-dark fw-bold">
                    Register
                  </a>
                </li>

                <li>
                  <a href="/Contact" className="nav-link text-dark fw-bold">
                    Contact Us
                  </a>
                </li>
              </ul>
              </div>
          </div>
        </div>
           
      </header>
    ); 
}
export default MainHeader;