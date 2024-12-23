import React from 'react';
import '../../styles/ExtravaganzaAbout.css';
import image1 from '../../assets/images/ExtravaganzaAbout-1.png'
import image2 from '../../assets/images/ExtravaganzaAbout-2.png'
import image3 from '../../assets/images/ExtravaganzaAbout-3.png'
import image4 from '../../assets/images/ExtravaganzaAbout-4.png'
import ExtravagangaAboutDialog from './ExtravaganzaAboutDialog';

const ExtravaganzaAbout = () => {

  const cardsData=[
    {
      id:1,
      name:'carnival',
      bgImage: image1,
      dialogText:"Step into the vibrant world of Indian tradition at XPLODE 2024, where culture comes alive! From mesmerizing classical dance performances like Bharatanatyam and Kathak to soul-stirring folk music and timeless art forms, immerse yourself in the beauty of India’s rich heritage. Witness grand Rangoli displays, traditional attire showcases, and thrilling cultural competitions that celebrate unity in diversity. "
    },
    {
      id:2,
      name:'xplode',
      bgImage: image2,
      dialogText:"Step into the vibrant world of Indian tradition at XPLODE 2024, where culture comes alive! From mesmerizing classical dance performances like Bharatanatyam and Kathak to soul-stirring folk music and timeless art forms, immerse yourself in the beauty of India’s rich heritage. Witness grand Rangoli displays, traditional attire showcases, and thrilling cultural competitions that celebrate unity in diversity. "
    },
    {
      id:3,
      name:'Tech fest',
      bgImage: image4,
      dialogText:"Step into the vibrant world of Indian tradition at XPLODE 2024, where culture comes alive! From mesmerizing classical dance performances like Bharatanatyam and Kathak to soul-stirring folk music and timeless art forms, immerse yourself in the beauty of India’s rich heritage. Witness grand Rangoli displays, traditional attire showcases, and thrilling cultural competitions that celebrate unity in diversity. "
    },
    {
      id:4,
      name:'sports',
      bgImage: image3,
      dialogText:"Step into the vibrant world of Indian tradition at XPLODE 2024, where culture comes alive! From mesmerizing classical dance performances like Bharatanatyam and Kathak to soul-stirring folk music and timeless art forms, immerse yourself in the beauty of India’s rich heritage. Witness grand Rangoli displays, traditional attire showcases, and thrilling cultural competitions that celebrate unity in diversity. "
    },
    {
      id:4,
      name:'sports',
      bgImage: image3,
      dialogText:"Step into the vibrant world of Indian tradition at XPLODE 2024, where culture comes alive! From mesmerizing classical dance performances like Bharatanatyam and Kathak to soul-stirring folk music and timeless art forms, immerse yourself in the beauty of India’s rich heritage. Witness grand Rangoli displays, traditional attire showcases, and thrilling cultural competitions that celebrate unity in diversity. "
    },
    {
      id:4,
      name:'sports',
      bgImage: image3,
      dialogText:"Step into the vibrant world of Indian tradition at XPLODE 2024, where culture comes alive! From mesmerizing classical dance performances like Bharatanatyam and Kathak to soul-stirring folk music and timeless art forms, immerse yourself in the beauty of India’s rich heritage. Witness grand Rangoli displays, traditional attire showcases, and thrilling cultural competitions that celebrate unity in diversity. "
    }
  ]
  
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
