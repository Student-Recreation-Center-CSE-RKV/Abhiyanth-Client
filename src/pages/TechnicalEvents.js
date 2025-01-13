import image1 from "../assets/images/deptimage1.jpeg";
import image2 from "../assets/images/deptimage2.jpeg";
import image3 from "../assets/images/deptimage3.jpeg";
import image4 from "../assets/images/deptimage4.jpeg";
import image5 from "../assets/images/deptimage5.jpeg"; 
import ImageCarousel from "../components/general/Carousel";
import PageTop from "../components/general/PageTop";
import "../styles/technicalevents.css";
import i1 from "../assets/images/techEvents/IMG-20241227-WA0009.jpg"
import i2 from "../assets/images/techEvents/IMG-20241227-WA0011.jpg"
import i3 from "../assets/images/techEvents/IMG-20250101-WA0020.jpg"
import i4 from "../assets/images/techEvents/IMG-20250101-WA0025 (1).jpg"
import i5 from "../assets/images/techEvents/webinar.jpeg"
import i6 from "../assets/images/hackathon.jpeg"

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
        image: image2,
        description: "Study chemical processes and industrial chemistry.",
    },
    {
        name: "MME",
        image: image3,
        description: "Understand materials science and metallurgical processes.",
    },
];


export default function TechnicalEvents() {
    return (
        <> 
            <div style={{paddingTop:"70px"}}>
            <PageTop img1={i3} img2={i2} img3={i5} img4={i1} img5={i4} img6={i6} text="TECH Events"/>
            </div>
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
