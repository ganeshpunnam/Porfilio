import React from 'react';
import './index.css';

const Index = ({ setNavid, navid }) => {
  const navBarItems = [
    {
      id: 0,
      iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
      name: 'HOME',
    },
    {
      id: 1,
      iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
      name: 'ABOUT',
    },
    {
      id: 2,
      iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
      name: 'PROJECTS',
    },
    {
      id: 3,
      iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
      name: 'CONTACT',
    },
  ];

  const onClickButton = (navitem) => {
    setNavid(navitem.id);
  };

  return (

    <div className='maincontainer'>
      <div>
      <img  id='imageprofile' src="/Asects/profile.jpg" alt="Profile" />


      </div>
      
      {navBarItems.map((navitem) => (
        <div key={navitem.id} className={navid === navitem.id ? 'selected-button' : 'button'} onClick={() => onClickButton(navitem)}>
          <img  className='nav-image' src={navitem.iconUrl} alt={navitem.name} />
          <p className='nav-item'>{navitem.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
