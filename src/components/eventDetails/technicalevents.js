import image1 from "../../assets/images/deptimage1.jpeg";
import image2 from "../../assets/images/deptimage2.jpeg";
import image3 from "../../assets/images/deptimage3.jpeg";
import image4 from "../../assets/images/deptimage4.jpeg";
import image5 from "../../assets/images/deptimage5.jpeg"; 
import image6 from "../../assets/images/deptimage6.jpeg"; 
import image7 from "../../assets/images/deptimage7.jpeg"; 
import ImageCarousel from "../general/Carousel";
import "../../styles/technicalevents.css";

const departments = [
    {
        name: "CSE",
        image: image1,
        description: "Explore cutting-edge tech and software development.",
    },
    {
        name: "ECE",
        image: image3,
        description: "Dive into circuits and modern electronic devices.",
    },
    {
        name: "EEE",
        image: image5,
        description: "Focus on power systems and electrical technology.",
    },
    {
        name: "Mechanical",
        image: image2,
        description: "Discover machines, engines, and industrial automation.",
    },
    {
        name: "Civil",
        image: image4,
        description: "Learn about construction, design, and infrastructure.",
    },
    {
        name: "Chemical",
        image: image6,
        description: "Study chemical processes and industrial chemistry.",
    },
    {
        name: "MME",
        image: image7,
        description: "Understand materials science and metallurgical processes.",
    },
];

const images = [image1, image2, image3, image4, image5, image6, image7];

export default function Technicalevents() {
    return (
        <> 
            <ImageCarousel images={images} />
            <h1 className="title">Technical Events</h1>
            <div className="main">
                <div className="cards-container">
                    {departments.map((dept, index) => (
                        <div key={index} className="card">
                            <img src={dept.image} alt={dept.name} className="card-image" />
                            <h2 className="card-title">{dept.name}</h2>
                            <p className="card-description">{dept.description}</p>
                            <button className="view-events-button">See All Events</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
