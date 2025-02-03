
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import FlagIcon from '@mui/icons-material/Flag';
import PlaceIcon from '@mui/icons-material/Place';
import StarsIcon from '@mui/icons-material/Stars';
import { Button } from '@mui/material';

const workIcon = {
  icon: <StarsIcon />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const startIcon = {
  icon: <PlaceIcon />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const endIcon= {
  icon: <FlagIcon />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};
const Styles = {
  Title:{
    color:"#c91c75",
    fontSize:{xs:"20px",md:"22px",lg:"28px"},
    fontFamily:"DM Sans",
    fontWeight:"bold",
  },
  desc:{
    color:"black",
			fontWeight: "bold",
      fontSize:{xs:"16px",md:"18px",lg:"20px"},
      padding:"5px",
      fontFamily: "Orbitron",
  }
}
export default function TimelineMap() {
  const timeline = [
    { icon: startIcon,
      title: "start",
      date: "2021-01-01",
    },
    {
      icon: workIcon,
      id: 1,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 2,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 3,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 4,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 5,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 6,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 7,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    {
      icon: workIcon,
      id: 8,
      title: "Event 1",
      date: "2021-01-01",
      description: "Event 1 Description",
      location: "Event 1 Location",
      link: "https://www.google.com",
      shortDescription: "Event 1 Short Description"
    },
    { icon: endIcon,
      title: "End",
      date: "2021-01-01",
    },
  ];

  return (
    <div className="App">
      <h3>
        Event Schedule 
      </h3>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i%2 === 0
              ? { background: '#23f7d4', color: '#fff',boxShadow: "0px 10px 20px rgba(244, 243, 243, 0.3)" }
              : undefined;
          const arrowStyle =
            i%2 === 0
              ? { borderRight: '7px solid #23f7d4' }
              : undefined;

            return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              {...t.icon}
              position={i % 2 === 0 ? "left" : "right"}
            >
              {t.title ? (
              <React.Fragment>
              <h3 style={Styles.Title}>{t.title}</h3>
              {t.date && (
              <div style={Styles.desc}>
              <h4>{t.date} &nbsp; &nbsp; &nbsp; {t.location}</h4>
              <p>{t.shortDescription}</p>
              <Button variant="contained" color="secondary" sx={{  width: '171px',  marginBottom: { xs: '20px', sm: '0' } }} href={`/events/${t.id}`}> More Info</Button>&nbsp; &nbsp; &nbsp;
              <div title="Add to Calendar" className="addeventatc" style={{ display: 'inline-block', width: "170px", padding: '8px 12px', backgroundColor: '#1976d2', color: '#fff', borderRadius: '4px', textAlign:"right",cursor: 'pointer',}}>
              Add to Calendar
              <span className="start">02/13/2025 08:00 AM</span>
              <span className="end">02/13/2025 10:00 AM</span>
              <span className="timezone">America/Los_Angeles</span>
              <span className="title">Summary of the event</span>
              <span className="description">Description of the event</span>
              <span className="location">Location of the event</span>
              </div>
              </div>
              )}
              </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
            );
        })}
      </VerticalTimeline>
    </div>
  );
}


// rgb(192,78,191)
//rgb(18,104,191)
//rgb(76,176,81)