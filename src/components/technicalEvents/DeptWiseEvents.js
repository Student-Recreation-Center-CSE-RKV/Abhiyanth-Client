import React from "react";
import "../../styles/DeptWiseEvents.css"
import Carousel from "../general/Carousel.js";
import hackathon from "../../assets/images/hackathon.jpeg";
import enginix from "../../assets/images/enginix-2k24.jpg";
import pyWorkShop from "../../assets/images/python-workshop-src.jpg";
import srcEventManage from "../../assets/images/hackathon-src.jpg";
import DeptWiseCustomCard from "./DeptWiseCustomCard.js";

const DeptWiseEvents = () => {
  const carouselImages = [hackathon, enginix, pyWorkShop, srcEventManage];
  const events = [
    {
      name: "Hackathon",
      description:
        "A competitive event to design and build robots to perform specific tasks",
      sponsors: ["Nyra", "SBI", "Acer", "Dalmia"],
    },
    {
      name: "Tech Talk",
      description:
        "An interactive session where industry leaders discuss the latest trends in technology",
      sponsors: ["Intel", "Google", "Amazon"],
    },
    {
      name: "Coding Bootcamp",
      description:
        "A hands-on coding workshop for beginners to learn web development and programming basics",
      sponsors: ["Microsoft", "GitHub", "Wipro"],
    },
    {
      name: "Data Science Symposium",
      description:
        "A conference for data enthusiasts to discuss the latest innovations in data analysis and machine learning",
      sponsors: ["IBM", "NVIDIA", "Tesla"],
    },
    {
      name: "AI Challenge",
      description:
        "A competition where participants create artificial intelligence systems to solve real-world problems",
      sponsors: ["Tesla", "Google", "Oracle"],
    },
    {
      name: "Blockchain Summit",
      description:
        "A summit focused on blockchain technology and its applications in various industries",
      sponsors: ["Ethereum", "Coinbase", "Ripple"],
    },
    {
      name: "Cloud Computing Expo",
      description:
        "An exhibition where cloud service providers showcase their latest offerings and solutions",
      sponsors: ["AWS", "Microsoft Azure", "Google Cloud"],
    },
    {
      name: "Mobile App Development Workshop",
      description:
        "A hands-on workshop for building mobile applications using modern technologies and frameworks",
      sponsors: ["Apple", "Android", "Xiaomi"],
    },
  ];

  return (
    <div className="deptwise-events-container">
      <div className="deptwise-events-heading">
        Computer science and Engineering
      </div>

      <div className="deptwise-events-carousel">
        <Carousel images={carouselImages} />
      </div>

      <div className="deptwise-events-cards">
        {events.map((event, index) => (
          <DeptWiseCustomCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DeptWiseEvents;
