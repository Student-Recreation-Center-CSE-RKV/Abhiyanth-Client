import React from "react";
import { Typography, Box } from "@mui/material";
import img1 from "../../assets/images/gallary_img1.jpeg";
import img2 from "../../assets/images/gallary_img2.jpeg";
import img3 from "../../assets/images/gallary_img3.jpeg";
import img4 from "../../assets/images/gallary_img4.jpeg";
import img5 from "../../assets/images/gallary_img5.jpeg";
import img6 from "../../assets/images/gallary_img6.jpeg";
import img7 from "../../assets/images/gallary_img7.jpeg";
import img8 from "../../assets/images/gallary_img8.jpeg";
import "../../styles/about_heading.css"

const MomentsGallary = () => {
	const images = [img1, img2, img3, img4, img5, img6, img7, img8];

	return (
		<>
			{/* Slider and Typography visible only on small screens */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding:"20px"
				}}
			>
				<Typography
					variant="h5"
					sx={{
						paddingLeft: "0.5rem",
						textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
						marginBottom: "1rem",
            display: { xs: "block", md: "none" },
					}}
					className="about-heading"
				>
					Moments of Previous Abhiyanth
				</Typography>

				<Box
					sx={{
						display: { xs: "block", md: "none" },
						overflowX: "auto",
						whiteSpace: "nowrap",
						padding: "1rem",
          "&::-webkit-scrollbar": { display: "none" },
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "10px",
						}}
					>
						{images.map((image, index) => (
							<Box
								key={index}
								sx={{
									minWidth: "200px",
									height: "200px",
									flexShrink: 0,
									borderRadius: "8px",
									boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
									overflow: "hidden",
								}}
							>
								<img
									src={image}
									alt={`Gallery ${index + 1}`}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</Box>
						))}
					</Box>
				</Box>
			</div>
			<Box
				sx={{
					padding: "20px",
					color: "#fff",
					maxWidth: "100vw",
					margin: "auto",
					borderRadius: "8px",
					display: { xs: "none", sm: "block" },
				}}
			>
				{/* CSS Grid Layout */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(12, 1fr)", // 12-column layout
						gridAutoRows: "200px",
						gap: "10px",
					}}
				>
					{/* Row 1 */}
					<Box
						sx={{
							gridColumn: "1 / span 6",
							gridRow: "1 / span 1",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Typography
							variant="h5"
							sx={{
								fontFamily: "Audiowide, sans-serif",
								fontWeight: "bold",
								fontSize: "4.5rem",
								paddingLeft: "1.5rem",
								textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
								alignSelf: "flex-end",
							}}
						>
							Moments of Previous
						</Typography>
					</Box>
					<Box
						sx={{
							gridColumn: "10 / span 3",
							gridRow: "1 / span 1",
						}}
					>
						<img
							src={images[2]}
							alt="gallery img 1"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>

					{/* Row 2 */}
					<Box
						sx={{
							gridColumn: "1 / span 6",
							gridRow: "2 / span 1",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Typography
							variant="h5"
							sx={{
								fontFamily: "Audiowide, sans-serif",
								fontWeight: "bold",
								fontSize: "4.5rem",
								paddingLeft: "1.5rem",
								alignSelf: "flex-start",
								textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
							}}
						>
							Abhiyanth
						</Typography>
					</Box>
					<Box
						sx={{
							gridColumn: "7 / span 3",
							gridRow: "2 / span 2", // Simulating rowspan
						}}
					>
						<img
							src={images[4]}
							alt="gallery img 2"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>
					<Box
						sx={{
							gridColumn: "10 / span 3",
							gridRow: "2 / span 1",
						}}
					>
						<img
							src={images[0]}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>

					{/* Row 3 */}
					<Box
						sx={{
							gridColumn: "4 / span 3",
							gridRow: "3 / span 1",
						}}
					>
						<img
							src={images[3]}
							alt="gallery img 4"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>
					<Box
						sx={{
							gridColumn: "10 / span 3",
							gridRow: "3 / span 1",
						}}
					>
						<img
							src={images[1]}
							alt="gallery img 5"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>

					{/* Row 4 */}
					<Box
						sx={{
							gridColumn: "1 / span 3",
							gridRow: "4 / span 1",
						}}
					>
						<img
							src={images[5]}
							alt="gallery img 6"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>
					<Box
						sx={{
							gridColumn: "4 / span 3",
							gridRow: "4 / span 1",
						}}
					>
						<img
							src={images[6]}
							alt="gallery img 7"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>
					<Box
						sx={{
							gridColumn: "7 / span 6",
							gridRow: "4 / span 1",
						}}
					>
						<img
							src={images[7]}
							alt="gallery img 8"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "4px",
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default MomentsGallary;
