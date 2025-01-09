import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../styles/perksAndBenifitsAccordian.css'; 
import '../../styles/PerksAndBenifitsInSponsers.css'



export default function AccordionExpandDefault() {

    const benefitsData = [
        {
          heading: "Eligibility Amount Bracket",
          details: [
            { title: "TITLE SPONSOR", value: "450K+" },
            { title: "MEGA ASSOCIATE SPONSOR", value: "300K+" },
            { title: "CO SPONSOR", value: "150K+" },
            { title: "EVENT SPONSOR", value: "100K+" },
            { title: "CULTURAL NIGHT SPONSOR", value: "350K+" },
          ]
        },
        {
          heading: "Merchandise | Event passes | Event Brochures | Invitation Letters",
          details: [
            { title: "TITLE SPONSOR", value: "10" },
            { title: "MEGA ASSOCIATE SPONSOR", value: "6" },
            { title: "CO SPONSOR", value: "" },
            { title: "EVENT SPONSOR", value: "" },
            { title: "CULTURAL NIGHT SPONSOR", value: "5" },
          ]
        },
        {
          heading: "Event Brochures | Invitation Letters",
          details: [
            { title: "TITLE SPONSOR", value: "✔" },
            { title: "MEGA ASSOCIATE SPONSOR", value: "✔" },
            { title: "CO SPONSOR", value: "✔" },
            { title: "EVENT SPONSOR", value: "only for one event" },
            { title: "CULTURAL NIGHT SPONSOR", value: "" },
          ]
        },
        // Continue adding the remaining data following the same pattern...
        {
            heading: "Standees (On campus, during fest)",
            details: [
              { title: "TITLE SPONSOR", value: "10" },
              { title: "MEGA ASSOCIATE SPONSOR", value: "6" },
              { title: "CO SPONSOR", value: "3" },
              { title: "EVENT SPONSOR", value: "-" },
              { title: "CULTURAL NIGHT SPONSOR", value: "-" },
            ]
        },
        {
            heading: "Coverage in After Movie Released on",
            details: [
              { title: "TITLE SPONSOR", value: "✔" },
              { title: "MEGA ASSOCIATE SPONSOR", value: "✔" },
              { title: "CO SPONSOR", value: "✔" },
              { title: "EVENT SPONSOR", value: "✔" },
              { title: "CULTURAL NIGHT SPONSOR", value: "✔" },
            ]
          },
          {
            heading: "During Event & On Radio",
            details: [
              { title: "TITLE SPONSOR", value: "✔" },
              { title: "MEGA ASSOCIATE SPONSOR", value: "✔" },
              { title: "CO SPONSOR", value: "✔" },
              { title: "EVENT SPONSOR", value: "✔" },
              { title: "CULTURAL NIGHT SPONSOR", value: "✔" },
            ]
          },
        {
            heading: "Stalls at Premium Locations",
            details: [
              { title: "TITLE SPONSOR", value: "4" },
              { title: "MEGA ASSOCIATE SPONSOR", value: "2" },
              { title: "CO SPONSOR", value: "1" },
              { title: "EVENT SPONSOR", value: "-" },
              { title: "CULTURAL NIGHT SPONSOR", value: "-" },
            ]
          },

      ];

  return (
    <div className='accordion-container '>
      {benefitsData.map((benefit, index) => (
        <Accordion key={index}  >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className={`accordion-header ${index % 2 === 0 ? 'color-1' : 'color-2'}`} // Alternating colors
          >
            <Typography component="span" sx={{fontWeight:"4rem"}}>{benefit.heading }</Typography>
          </AccordionSummary>
          <AccordionDetails>
          {benefit.details.map((detail, i) => (
              <Typography key={i} style={{ marginBottom: '10px' }}>
                <strong>{detail.title}:</strong> {detail.value}
              </Typography>
            ))}
            
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
