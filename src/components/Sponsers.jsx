import React from "react";
import "../styles/sponsers.css";

export default function Sponsers() {
	return (
		<div className="container">
			<div className="top-container">
				<div class="navbar-container">
					<div class="navbar">
						<div class="navbar-item">Spotify</div>
						<div class="navbar-item">Google</div>
						<div class="navbar-item">Trivago</div>
						<div class="navbar-item">Adobe</div>
						<div class="navbar-item">Stripe</div>
						<div class="navbar-item clone">Spotify</div>
						<div class="navbar-item clone">Google</div>
						<div class="navbar-item clone">Trivago</div>
						<div class="navbar-item clone">Adobe</div>
						<div class="navbar-item clone">Stripe</div>
					</div>
				</div>
				<p className="main-heading">Sponsers </p>
				<div class="navbar-container1">
					<div class="navbar1">
						<div class="navbar-item">Puma</div>
						<div class="navbar-item">Airbnb</div>
						<div class="navbar-item">Pinterest</div>
						<div class="navbar-item">Reddit</div>
						<div class="navbar-item">Adidas</div>
						<div class="navbar-item clone">Puma</div>
						<div class="navbar-item clone">Airbnb</div>
						<div class="navbar-item clone">Pinterest</div>
						<div class="navbar-item clone">Reddit</div>
						<div class="navbar-item clone">Adidas</div>
					</div>
				</div>
			</div>
			<div className="bottom-container">
				<h2 className="left-heading">
					WHEN WE CELEBRATE <br></br>ABHIYANTH?
					<img
						src="images/image40g.png"
						alt="abc image"
						className="image1"
					></img>
				</h2>
				<div className="content-container ">
					<div className="left-para ">
						Every Spring, Rajiv Gandhi University Comes Alive with Abhiyanth,
						Our Annual Tech and Cultural Fest That Celebrates the Spirit of
						Creativity and Technical Brilliance. Abhiyanth 2024 is Scheduled For
						The Month of March and Promises To Bring Together Innovators,
						Performers, and Enthusiasts From Various Walks of Life. With
						Workshops, Hackathons, Exhibitions, and Food Lovers From Across The
						Region.
						<img
							src="images/image2.png"
							alt="abc image"
							className="image2"
						></img>
					</div>
					<div className="right-para">
						Every Spring, Rajiv Gandhi University Comes Alive with Abhiyanth,
						Our Annual Tech and Cultural Fest That Celebrates the Spirit of
						Creativity and Technical Brilliance. Abhiyanth 2024 is Scheduled For
						The Month of March and Promises To Bring Together Innovators,
						Performers, and Enthusiasts From Various Walks of Life. With
						Workshops, Hackathons, Exhibitions, and Food Lovers From Across The
						Region.
					</div>
				</div>
				<div style={{ textAlign: "right" }}>
					<h2 className="right-heading">
						WHY WE CELEBRATE <br></br>ABHIYANTH?
					</h2>
				</div>
			</div>
		</div>
	);
}
