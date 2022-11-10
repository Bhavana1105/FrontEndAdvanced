import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Outlet, Route, Link, BrowserRouter as Router  } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './Pages/HomePage';
import AboutPage  from "./Pages/AboutPage";
import LoginPage from './Pages/LoginPage';
import ContactPage from './Pages/ContactPage';
import RegistrationPage from './Pages/RegistrationPage';
import RecipePage from './Pages/RecipePage';
import MainHeader from './Pages/Components/MainHeader';
import Footer from './Pages/Components/Footer';
import NotFound from'./Pages/Components/NotFound';
import reportWebVitals from './reportWebVitals';
import redlogo from './Pages/Images/redlogo.png';
const routing  = (

  <Router>
      <hr/>
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
             
             
 <div style={{float:"left",textDecoration:"none"}}> 
          <Link to="/" className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}}>Home</Link> &nbsp;
          <Link to="/LoginPage" className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}}>Login</Link> &nbsp;
          <Link to="/RegistrationPage" className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}}>Register</Link>&nbsp; 
          <Link to="/RecipePage" className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}} >Recipies</Link> &nbsp;
          <Link to="/AboutPage"  className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}}>About Us</Link> &nbsp;
          <Link to="/ContactPage" className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}} >Contact Us</Link> &nbsp;     
          <Link to="/*"  className=" text-dark fw-bold" style={{textDecoration:"none",paddingLeft:"18px"}}></Link>  &nbsp;     
      </div>
      <hr/> 
         </ul>
              </div>
          </div>
        </div>   
      </header>
      <Routes>
          <Route path="/"  element = { <HomePage /> }  />
          <Route path="/LoginPage"  element = { <LoginPage /> }  />
          <Route path="/RegistrationPage"  element = { <RegistrationPage /> }  />
          <Route path="/RecipePage"  element = { <RecipePage /> }  />
          <Route path="/AboutPage"  element = { <AboutPage /> }  />
          <Route path="/ContactPage"  element = { <ContactPage /> }  />
          <Route path="*"  element = { <NotFound /> }  />
      </Routes>
     
     
      <Footer/>
  </Router> 
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  {routing}
</React.StrictMode>
); 