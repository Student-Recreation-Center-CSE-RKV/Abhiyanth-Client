import React, { Fragment } from "react";
import "../../styles/sponsers.css";
import { Grid2, Typography } from "@mui/material";
import img1 from "../../assets/images/whatsinabiyanth_img1.png";
import img2 from "../../assets/images/whatsinabiyanth_img2.png";
import img3 from "../../assets/images/whatsinabiyanth_img3.png";
import img4 from "../../assets/images/whatsinabiyanth_img4.png";
import img5 from "../../assets/images/whatsinabiyanth_img5.png";
import img6 from "../../assets/images/whatsinabiyanth_img6.png";

export default function WhatsInAbiyanth() {
	const rows = [
		{
			img1: img1,
			heading1: "Boosting Awareness for a product lauch",
			img2: img2,
			heading2: "Reaching New Audience",
		},
		{
			img1: img3,
			heading1: "Building Brand Awareness",
			img2: img4,
			heading2: "Engaging with Revelant Community",
		},
		{
			img1: img5,
			heading1: "Repositioning their Brand",
			img2: img6,
			heading2: "Aligning with CSR Initiatives",
		},
	];
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "2rem",
				color: "white",
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "38px", sm: "39px", md: "58px", lg: "70px" },
					fontWeight: 400,
					lineHeight: { xs: "40px", md: "80px", lg: "90.29px" },
					textAlign: "center",
					textUnderlinePosition: "from-font",
					textDecorationSkipInk: "none",
					fontFamily: "Audiowide",
					marginBlock: "2rem",
				}}
			>
				What's in
				<br /> <span style={{ color: "#C91C75" }}>ABIYANTH</span> for you
			</Typography>
			<Grid2
				container
				spacing={4}
				sx={{ padding: 4, width: "89vw", margin: "auto" }}
			>
				{rows.map((row, rowIndex) => (
					<Fragment key={rowIndex}>
						{/* First Column */}
						<Grid2
							size={6}
							display="flex"
							flexDirection="column"
							alignItems="center"
						>
							<img
								src={row.img1}
								style={{
									maxWidth: "80%",
									height: "auto",
								}}
							/>
							<Typography
								variant="h6"
								sx={{
									marginTop: 2,
									fontFamily: "Audiowide",
									fontSize: { xs: "18px", sm: "24px", md: "30px", lg: "38px" },
									fontWeight: "400",
									lineHeight: {
										xs: "22px",
										sm: "43px",
										md: "50px",
										lg: "53.75px",
									},
									textAlign: "center",
									textUnderlinePosition: "from-font",
									textDecorationSkipInk: "none",
									color: "#6AE4FF",
									padding: "1.5rem",
									paddingInline: "4rem",
								}}
							>
								{row.heading1}
							</Typography>
						</Grid2>
						{/* Second Column */}
						<Grid2
							size={6}
							display="flex"
							flexDirection="column"
							alignItems="center"
						>
							<img
								src={row.img2}
								// eslint-disable-next-line
								alt="abhiyanthImage"
								style={{
									maxWidth: "70%",
									height: "auto",
								}}
							/>
							<Typography
								variant="h6"
								sx={{
									marginTop: 2,
									fontFamily: "Audiowide",
									fontSize: { xs: "18px", sm: "24px", md: "30px", lg: "38px" },
									fontWeight: "400",
									lineHeight: {
										xs: "22px",
										sm: "43px",
										md: "50px",
										lg: "53.75px",
									},
									textAlign: "center",
									textUnderlinePosition: "from-font",
									textDecorationSkipInk: "none",
									color: "#6AE4FF",
									padding: "1.5rem",
									paddingInline: "4rem",
								}}
							>
								{row.heading2}
							</Typography>
						</Grid2>
					</Fragment>
				))}
			</Grid2>
		</div>
	);
}
