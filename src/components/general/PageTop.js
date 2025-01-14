import React from 'react'
import "../../styles/allEvents.css"
import Grid2 from "@mui/material/Grid2";
import abiyanthLogo from "../../assets/images/Abhiyanthlogo2.png";

export default function PageTop({img1,img2,img3,img4,img5,img6,text}) {
  return (
    <div className="eventsHeader">
				<div className="eventAbiyanthLogo">
					<div className="duplicate123">
						<img
							src={abiyanthLogo}
							alt="abiyanth logo"
							className="abiyanthlogoimg"
						></img>
						<h3 className="alleventsculturalsheading">{text}</h3>
					</div>
				</div>
				<Grid2 container spacing={1}>
					<Grid2 size={3}>
						<img src={img4} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={3}>
						<img src={img2} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={6}>
						<img src={img1} className="imageInHeader" alt="gallery img 3" />
					</Grid2>

					<Grid2 size={6}>
						<img src={img6} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={3}>
						<img src={img5} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={3}>
						<img src={img3} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
				</Grid2>
			</div>
  )
}
