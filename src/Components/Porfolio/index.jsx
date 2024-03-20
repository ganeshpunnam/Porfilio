import React, { useState } from 'react';
import Navbar from '../Navbar';
import About from '../About';
import Home from '../Home';
import Contact from '../Contact';
import Projects from '../Projects'
import './index.css';
import SocialMediaSection from '../SocialMediaSection';

const Index = () => {
  const [navid, setNavid] = useState(0);
  const displayNavLink = () => {
    let display;
    switch (navid) {
      case 0:
        display = <Home />;
        break;
      case 1:
        display = <About />;
        break;
        case 2:
          display =<Projects/>;
          break;
        case 3:
          display  =<Contact/>;
          break;
    }
    return display;
  }

  const displayNavPage = (id) => {
    setNavid(id);
  };

  console.log(navid);

  return (
    <div className='parent'>
    <div className='main'>
      <Navbar setNavid={displayNavPage} navid={navid} />
      <div className='sunmain'>
       <div className='contain'>{displayNavLink()}</div> 
      <SocialMediaSection />
      </div >
    </div>
    </div>
  );
};

export default Index;
