import React from 'react';
import '../../styles/ExtravaganzaAbout.css';
import techFest from '../../assets/images/ExtravaganzaAbout-4.png'
import image3 from '../../assets/images/gallary_img1.jpeg'
import sports from '../../assets/images/sports.jpeg'
import hackathon from "../../assets/images/hackathon.jpeg"

import ExtravagangaAboutDialog from './ExtravaganzaAboutDialog';

const ExtravaganzaAbout = () => {

  const cardsData = [
    {
      id: 2,
      name: 'Xplode',
      bgImage: image3,
      dialogText: "Get ready to ignite your passion at XPLODE 2024! A cultural extravaganza filled with electrifying performances, from classical and contemporary dances to melodious musical renditions. Celebrate the spirit of diversity and creativity through vibrant rangoli art, traditional attire displays, and exciting competitions. Experience the heartbeat of culture and tradition at its finest!"
    },
    {
      id: 3,
      name: 'Tech Fest',
      bgImage: techFest,
      dialogText: "Dive into the future of innovation at Tech Fest 2024! Explore cutting-edge technologies through hands-on workshops, interactive exhibits, and thought-provoking seminars by industry experts. Engage in coding challenges, robotics competitions, and hackathons that push the boundaries of creativity and technical prowess. Join us to shape tomorrow, today!"
    },
    {
      id: 4,
      name: 'Sports',
      bgImage: sports,
      dialogText: "Feel the adrenaline rush at Sports Fest 2024! Showcase your athletic skills and team spirit across a wide array of sports, from cricket and football to badminton and athletics. Participate in thrilling matches and celebrate the joy of victory, camaraderie, and sportsmanship in a vibrant, competitive environment!"
    },
    {
      id: 5,
      name: 'Hackathon',
      bgImage: hackathon,
      dialogText: "Unleash your coding genius at Hackathon 2024! Collaborate with fellow innovators to tackle real-world challenges, create groundbreaking solutions, and compete for exciting prizes. Join us for 24 hours of non-stop ideation, programming, and innovation, where your creativity and skills take center stage!"
    }
  ];
  
  
  return (

    <div className="extravaganzaAbout-container">
      <div className="ExtravagangaAbout-heading">
        Abhiyanth Extravaganza
      </div>
      <div className="circle-container">
        {cardsData.map((card)=>
        <div className="extravaganzaAbout-circle-1"
             style={{backgroundImage:`url(${card.bgImage})`}}
             key={card.id}
        >
          <h3>{card.name}</h3>
          <div className="button-container">
            
            <ExtravagangaAboutDialog  cardName={card.name} bgImage={card.backgroundImage} id={card.id} dialogText={card.dialogText}/>
            
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default ExtravaganzaAbout;
