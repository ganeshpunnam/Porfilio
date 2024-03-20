import React from 'react';
import './index.css';

const Index = ({ s }) => {
  const socialMediaAppsData = [
    {
      id: 0,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png',
      name: 'linkedIn',
      siteUrl: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit',
    },
    {
      id: 1,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png',
      name: 'WhatsApp',
      siteUrl: 'https://wa.me/9542455696', 
    },
    {
      id: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png',
      name: 'instagram',
      siteUrl: 'https://www.instagram.com/ganeshnaidu_its_me?igsh=dWFjbndlanZuY29s',
    },
    {
      id: 3,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png',
      name: 'github',
      siteUrl: 'https://github.com/ganeshpunnam',
    },

  ];

  return (
    <div className='socialmedia'>
      {socialMediaAppsData.map((data) => (
        <div className='imgparent' key={data.id}>
          <img id='imag' src={data.imageUrl} alt={data.name} />
          <a  href={data.siteUrl} target='_blank'>{data.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Index;
