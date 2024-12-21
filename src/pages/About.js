import React from "react";
import "../styles/about.css";

import PreEventsCard from '../components/about/preEvents'
import DeptEvents from "../components/about/deptEvents";

export default function About() {
	return <div className="gif-background">
		<p style={{fontSize:"2rem",color:"pink"}}> About</p>
		<PreEventsCard/>
		<DeptEvents/>
	</div>;
}


