import React from 'react'
import '../../styles/Extravaganza.css'
import logo from '../../assets/images/abhiyath_logo_2.png'
import { useState } from 'react'


const Extravaganza = () => {

    const [hoverdCard , setHoveredCard] =  useState(null);
   const cards = [
        {
          id: 1,
          name: 'Culturals',
          logo: 'https://via.placeholder.com/80',
          events: ['Dance', 'Music', 'Drama' ],
        },
        {
          id: 2,
          name: 'Sports',
          logo: 'https://via.placeholder.com/80',
          events: ['Cricket', 'Football', 'Basketball' ],
        },
        {
          id: 3,
          name: 'Contests',
          logo: 'https://via.placeholder.com/80',
          events: ['Coding', 'Quizzes', 'Debates'],
        },
        {
          id: 4,
          name: 'Tech Events',
          logo: 'https://via.placeholder.com/80',
          events: ['Hackathon', 'AI Workshop', 'Robotics'],
        },
        {
          id: 5,
          name: 'Sponsors',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 6,
          name: 'xplode',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 7,
          name: 'Stalls',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 8,
          name: 'Autions',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 9,
          name: 'Bidding',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 10,
          name: 'Competitions',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C'],
        },
      ];
        
  return (
    <div className='bottom-gradient'>
        <div className='top-gradient'>
            <div className='heading-text'>
                <div className='heading'>Abhiyanth Extravaganza</div>
                <div className='text'>
                    Every spring, Rajiv Gandhi University comes alive with Abhiyanth, our iconic tech and cultural fest that celebrates the fusion of technology, creativity, and talent. This much-awaited event is a testament to the energy and passion of students, bringing together a vibrant mix of tech enthusiasts, artists, performers, and food lovers from across the region.
                </div>
            </div>

            <div className="cards-container">
                <div className='circle-1'></div>
                <div className='circle-2'></div>
                
                
                {cards.map((card) => (
                    <div
                    key={card.id} 
                    className={`card ${hoverdCard === card.id ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="icon-container">
                            <img src={logo} alt={`${card.name} Icon`} className="icon" />
                        </div>
                        <div className="card-gradient">
                            <p>{card.name}</p>
                        </div>
                        {hoverdCard === card.id && (
                            <div className="event-list">
                            <ul>
                                {card.events.map((event, index) => (
                                <li key={index}>{event}</li>
                                ))}
                            </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Extravaganza;