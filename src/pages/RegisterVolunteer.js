import { useEffect, useState } from "react";
import image1 from "../assets/images/deptimage1.jpeg";
import image2 from "../assets/images/deptimage2.jpeg";
import image3 from "../assets/images/deptimage3.jpeg";
import image4 from "../assets/images/deptimage4.jpeg";
import image5 from "../assets/images/deptimage5.jpeg"; 
import "../styles/technicalevents.css";
import { getAllVolunteerEvents } from "../api/volunteer";

const events = [
    {
        name: "Event1",
        image: image1,
        description: "Explore cutting-edge tech and software development.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
        
    },
    {
        name: "Event2",
        image: image3,
        description: "Dive into circuits and modern electronic devices.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
        
    },
    {
        name: "Event3",
        image: image5,
        description: "Focus on power systems and electrical technology.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
        
    },
    {
        name: "Event4",
        image: image2,
        description: "Discover machines, engines, and industrial automation.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
        
    },
    {
        name: "Event5",
        image: image4,
        description: "Learn about construction, design, and infrastructure.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
        
    },
    {
        name: "Event6",
        image: image2,
        description: "Study chemical processes and industrial chemistry.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
    },
    {
        name: "Event7",
        image: image3,
        description: "Understand materials science and metallurgical processes.",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
        
    },
    {
        name:"Event8",
        image:image3,
        description:"This is an event for having a good start for the event",
        volunteerFormLink: "https://forms.google.com/example1", // Replace with actual Google Form link
    }
];


export default function RegisterVolunteer() {
    const [volunteerEvents,setEvents]=useState([]);
    const getData=async()=>{
        try {
            const res=await getAllVolunteerEvents();
            setEvents(res);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
        <> 
            <div style={{marginTop:"70px"}}>
            <h1 className="title">Volunteer Registration</h1>
            <div className="main">
                <div className="cards-container">
                    {volunteerEvents.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.eventName} className="card-image" />
                            <h2 className="card-title">{item.eventName}</h2>
                            <p className="card-description">{item.eventDescription}</p>
                            <div className="button-container">
                                <button
                                    className="view-events-button"
                                    onClick={() => window.open(item.link, "_blank")}
                                >
                                    Register as a Volunteer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        </>
    );
}
