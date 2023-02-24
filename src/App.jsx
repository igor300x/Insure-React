import React, { useState } from 'react';

import { Body, Header, Nav, Main, Maincontainer, Landing, Howsection, Footer, Links } from './styled';
import Logo from './assets/images/logo.svg';
import Hamburger from './assets/images/icon-hamburger.svg';
import rightdesktop from './assets/images/bg-pattern-intro-right-desktop.svg';
import leftdesktop from './assets/images/bg-pattern-intro-left-desktop.svg';
import leftmobile from './assets/images/bg-pattern-intro-left-mobile.svg';
import rightmobile from './assets/images/bg-pattern-intro-right-mobile.svg';
import introdesktop from './assets/images/image-intro-desktop.jpg';
import snappyprocess from './assets/images/icon-snappy-process.svg';
import price from './assets/images/icon-affordable-prices.svg';
import first from './assets/images/icon-people-first.svg';
import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import pinterest from './assets/images/icon-pinterest.svg';
import instagram from './assets/images/icon-instagram.svg';

import Close from './assets/images/icon-close.svg';
// import {Body} from './sid';

import Sidebar from "./sidebar";



function App() {


  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  /*  const Sidebar = ({ active }) => {
   
     const closeSidebar = () => {
         active(false)
     }
 
     return(
         <Body sidebar = {active}>
           <img onClick={closeSidebar} src={Close} />
           
         </Body>
     )
     }   */


  return (
    <Body>
      <Header>
        <Nav>
          <div className='nav-container'>
            <img src={Logo} alt="logo" className='logo' />
            <ul className='nav-links'>
              <li className='nav-link'>How we work</li>
              <li className='nav-link'>Blog</li>
              <li className='nav-link'>Account</li>
              <li className='nav-link'><button>View plans</button></li>
            </ul>
            <button className='menu-btn'>
              <img onClick={showSidebar} src={Hamburger} alt="" />
              {sidebar && <Sidebar active={setSidebar} />}
            </button>
          </div>
        </Nav>
      </Header>
      <Main>
        <Maincontainer>
          <Landing>

            <img src={rightdesktop} alt="" className='intro-right ds' />
            <img src={leftdesktop} alt="" className='intro-left ds' />
            <div className='landing-container'>
              <div className='content'>
                <img src={leftmobile} alt="" className='container-left mb' />
                <img src={rightmobile} alt="" className='container-right mb' />
                <h1 className='title'>Humanizing <br />
                  your insurance.</h1>
                <p className='info'>
                  Get your life insurance coverage easier and faster. We blend our expertise
                  and technology to help you find the plan that’s right for you. Ensure you
                  and your loved ones are protected.
                </p>
                <button className='plan-btn'>View plans</button>
              </div>
              <div className='landing-img'>
                <img src={introdesktop} alt="" />
              </div>
            </div>

          </Landing>
          <Howsection>
            <div className='how-container'>
              <h1 className='title'>We’re different</h1>
              <div className='row'>
                <div className='card'>
                  <img src={snappyprocess} alt="" />
                  <div className='card-content'>
                    <h3 className='card-title'>Snappy Process</h3>
                    <p className='card-info'>Our application process can be
                      completed in minutes, not hours. Don’t get
                      stuck filling in tedious forms.
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <img src={price} alt="" />
                  <div className='card-content'>
                    <h3 className='card-title'>Affordable Prices</h3>
                    <p className='card-info'>We don’t want you worrying about
                      high monthly costs. Our prices may be low,
                      but we still offer the best coverage possible.
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <img src={first} alt="" />
                  <div className='card-content'>
                    <h3 className='card-title'>People First</h3>
                    <p className='card-info'>Our plans aren’t full of
                      conditions and clauses to prevent payouts. We make
                      sure you’re covered when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Howsection>
          <div className='work-section'>
            <div className='work-container'>
              <h1>
                Find out more <br /> about how we work
              </h1>
              <button>How we work</button>
            </div>
          </div>
        </Maincontainer>
      </Main>
      <Footer>

        <div className='footer-container'>
          <div className='socials'>
            <img src={Logo} alt="" />
            <div>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <hr />
          <Links>
            <div className='column'>
              <h4 className='column-title'>Our company</h4>
              <p>How we work</p>
              <p>Why Insure?</p>
              <p>View plans</p>
              <p>Reviews</p>
            </div>
            <div className='column'>
              <h4 className='column-title'>Help me</h4>
              <p>FAQ</p>
              <p>Terms of use</p>
              <p>Privacy policy</p>
              <p>Cookies</p>
            </div>
            <div className='column'>
              <h4 className='column-title'>Contact</h4>
              <p>Sales</p>
              <p>Support</p>
              <p>Live chat</p>
            </div>
            <div className='column'>
              <h4 className='column-title'>Others</h4>
              <p>Carrers</p>
              <p>Press</p>
              <p>Licenses</p>
            </div>
          </Links>
        </div>
        <div className='attribution'>
        Coded by <a href="https://github.com/igor300x"
         target="_blank">IGOR JORGE</a>
        </div>
      </Footer>
    </Body>
  )
}

export default App
