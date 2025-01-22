import React from "react";
import "../styles/about.css"; 
import PreEventsCard from "../components/about/preEvents";
import StatsComponent from "../components/about/StatsComponent";
import DeptEvents from "../components/about/deptEvents";
import AimVision from "../components/about/AimVision";
import MomentsGallary from "../components/about/gallary";
import GradientBorderComponent from "../components/general/GradientBorderComponet";
import ExtravaganzaAbout from '../components/about/ExtravaganzaAbout.js'
import ParticipatingClubs from "../components/about/Clubs.js";
import WelcomeMessages from "../components/about/welcomeMsg.js";
import { Contact } from "./ContactUs.js";


export default function About() {
	return (
		<div className="gif-background">
			<div style={{width:"100vw"}}>
				<AimVision />
			</div>
			<GradientBorderComponent/>
			<WelcomeMessages/>
			<GradientBorderComponent/>
			<StatsComponent />
      		<ExtravaganzaAbout/>
			<PreEventsCard />
			<GradientBorderComponent/>
			<DeptEvents />
			<GradientBorderComponent/>
			<MomentsGallary/>
			<GradientBorderComponent/>
			<Contact/>
			<GradientBorderComponent/>
			<ParticipatingClubs/>
		</div>
	);
}
