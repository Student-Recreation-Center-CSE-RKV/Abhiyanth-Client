import { Box, Typography } from "@mui/material";
import { sandAbLogo, aim, roboRocket, vision } from "../../assets/images";

function AimVision() {
	const styles = {
		container: {
			width: "100vw",
			height: "auto",
			minHeight: "100vh",
			flexShrink: "0",
			border: "3px solid",
			borderImageSource:
				"linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)",
			backgroundImage: `url(${sandAbLogo})`,
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			zIndex: "-1",
			position: "relative",
		},
		text: {
			color: "#FFF",
			paddingTop: "1rem",
			textAlign:"center",
			width: "100%",
			textShadow:
				"3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)",
			fontFamily: "Audiowide",
			fontSize: "50px", // Default size for desktop
			fontStyle: "normal",
			fontWeight: "400",
			lineHeight: "normal",
			'@media (max-width: 1200px)': {
				fontSize: "50px", // Adjust for large tablets
			},
			'@media (max-width: 900px)': {
				fontSize: "28px", // Adjust for small tablets
			},
			'@media (max-width: 600px)': {
				fontSize: "26px", // Adjust for mobile devices
				paddingLeft: "20%",
			},
		},
		textLayout: {
			display: "flex",
			height: "auto",
			width: "860px",
			position: "relative",
			top: "5%",
			left: "5%",
			flexDirection: "column",
			justifyContent: "center",
			padding: "2px 4px",
			flexShrink: "0",
			marginBottom:"3%",
			'@media (max-width: 900px)': {
				width: "100%",
				left: "0",
				padding: "0 10px",
			},
		},
		rectangle1: {
			minHeight: "100px",
			position: "relative",
			marginTop: "5%",
			marginLeft: "5%",
			marginRight: "5%",
			borderRadius: "26px",
			border: "1px solid var(--gradient, #FF6AB7,#6AE4FF)",
			background: "rgba(0, 0, 0, 0.25)",
			boxShadow:
				"-3px -4px 10px 0px rgba(255, 79, 248, 0.50), 3px 4px 10px 0px rgba(34, 209, 238, 0.50)",
			'@media (max-width: 900px)': {
				marginLeft: "2%",
				marginRight: "2%",
			},
		},
		contentText: {
			color: "white",
			textAlign: "center",
			fontFamily: "Averia Sans Libre",
			fontSize: "26px",
			fontStyle: "normal",
			fontWeight: "400",
			padding: "30px 40px",
			'@media (max-width: 900px)': {
				fontSize: "22px",
				padding: "20px 30px",
			},
			'@media (max-width: 600px)': {
				fontSize: "18px",
				padding: "15px 20px",
			},
		},
		rectangle2: {
			minHeight: "100px",
			position: "relative",
			marginTop: "5%",
			marginLeft: "5%",
			marginRight: "5%",
			borderRadius: "26px",
			border: "1px solid var(--gradient, #FF6AB7,#6AE4FF)",
			background: "rgba(0, 0, 0, 0.25)",
			boxShadow:
				"-3px -4px 10px 0px rgba(255, 79, 248, 0.50), 3px 4px 10px 0px rgba(34, 209, 238, 0.50)",
			'@media (max-width: 900px)': {
				marginLeft: "2%",
				marginRight: "2%",
			},
		},
		aim: {
			height: "20px",
			display: "inline-flex",
			justifyContent: "center",
			position: "absolute",
			alignItems: "center",
			marginTop: "-10px",
			marginLeft: "0px",
			marginRight: "5px",
			fontWeight: "bold",
		},
		aimText: {
			borderRadius: "12px",
			border: "1px solid var(--gradient, #FF6AB7)",
			padding: "5px 20px",
			background: "var(--Not-so-black, #11110F)",
			color: "#FFFF",
			textAlign: "center",
			textShadow:
				"3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)",
			fontFamily: "Audiowide",
			fontSize: "30px",
			fontStyle: "normal",
			fontWeight: "400",
			lineHeight: "normal",
			marginTop: "-5px",
			marginRight: "40px",
			'@media (max-width: 900px)': {
				fontSize: "24px",
				padding: "5px 15px",
			},
			'@media (max-width: 600px)': {
				fontSize: "20px",
				padding: "5px 10px",
			},
		},
	};
	return (
		<div >
			<div style={styles.container}>
				<Box sx={styles.textLayout}>
					<Typography sx={styles.text}>
						Abhiyanth 2K25
					</Typography>
				</Box>
				<Box sx={styles.rectangle1}>
					<Box component="span" sx={{ ...styles.aim }}>
						<img
							src={aim}
							style={{ width: "50px", height: "50px", marginRight: "0px" }}
							alt="aim"
						/>
						<Typography sx={styles.aimText}>Aim</Typography>
					</Box>

					<Typography
						variant="body1"
						sx={{ ...styles.contentText, marginLeft: "70px" }}
					>
						The Objective of Abhiyanth is to explore the endless limits of
						knowledge, enlightening the impact we can plunge into the world of
						innovation and delve into the ecstasy.
					</Typography>
				</Box>
				<Box sx={styles.rectangle2}>
					<Typography
						variant="h6"
						sx={{
							display: "flex",
							alignItems: "center",
							color: "#fff",
							marginBottom: "10px",
							paddingRight: "20px",
							justifyContent: "flex-end",
						}}
					>
						<Box component="span" sx={{ ...styles.aimText }}>
							Vision
						</Box>
						<Box
							component="span"
							sx={{
								...styles.aim,
								width: "50px",
								height: "50px",
								marginRight: "-10px",
								marginTop: "-10px",
							}}
						>
							<img
								src={vision}
								style={{ width: "70px", height: "80px" }}
								alt="vision"
							/>
						</Box>
					</Typography>
					<Typography variant="body1" sx={{ ...styles.contentText }}>
						Abhiyanth is a Valley of Engineers, events, artists coming together
						to form a 3-day techno management cultural fest with an instilling
						new spirit in quest of exposure, freedom, fun and diversity. In
						Abhiyanth, faith flows, aspirations arise, achievements adored,
						talent turns up with ecstasy endured
					</Typography>
				</Box>
			
				<Box
					style={{
						position: "absolute",
						bottom: "0",
						right: "0",
						height: "35%",
            width:"15%",
					}}
					component="img"
					src={roboRocket}
					alt="roboRocket"
					sx={{
						width: "100%",
						height: "100%",
            objectFit: "contain",
					}}
				/>
				
			</div>
		</div>
	);
}
export default AimVision;
