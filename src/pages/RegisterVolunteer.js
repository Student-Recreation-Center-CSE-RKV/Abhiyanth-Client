import image1 from "../assets/images/deptimage1.jpeg";
import image2 from "../assets/images/deptimage2.jpeg";
import image3 from "../assets/images/deptimage3.jpeg";
import image4 from "../assets/images/deptimage4.jpeg";
import image5 from "../assets/images/deptimage5.jpeg"; 
import "../styles/technicalevents.css";

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

const images = [image1, image2, image3, image4, image5, image3, image2];

export default function RegisterVolunteer() {
    return (
        <> 
            <div style={{marginTop:"60px"}}>
            {/* <ImageCarousel images={images} /> */}
            <h1 className="title">Volunteer Registration</h1>
            <div className="main">
                <div className="cards-container">
                    {events.map((dept, index) => (
                        <div key={index} className="card">
                            <img src={dept.image} alt={dept.name} className="card-image" />
                            <h2 className="card-title">{dept.name}</h2>
                            <p className="card-description">{dept.description}</p>
                            <div className="button-container">
                                <button
                                    className="view-events-button"
                                    onClick={() => window.open(dept.volunteerFormLink, "_blank")}
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
