import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/deptimage1.jpeg";
import image2 from "../../assets/images/deptimage2.jpeg";
import image3 from "../../assets/images/deptimage3.jpeg";
import image4 from "../../assets/images/deptimage4.jpeg";
import image5 from "../../assets/images/deptimage1.jpeg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const DeptEvents = () => {
	const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

	const handleNext = () => {
		setPositionIndexes((prevIndexes) => {
			const updatedIndexes = prevIndexes.map(
				(prevIndex) => (prevIndex + 1) % 5
			);
			return updatedIndexes;
		});
	};

	const handleBack = () => {
		setPositionIndexes((prevIndexes) => {
			const updatedIndexes = prevIndexes.map(
				(prevIndex) => (prevIndex + 4) % 5
			);

			return updatedIndexes;
		});
	};
	const handleDotClick = (index) => {
		const newPositionIndexes = Array.from(
			{ length: 5 },
			(_, idx) => (index + idx) % 5
		);
		setPositionIndexes(newPositionIndexes);
	};

	const handleImageClick = (index) => {
		handleDotClick(index);
	};

	const images = [image1, image2, image3, image4, image5];

	const positions = ["center", "left1", "left", "right", "right1"];

	const imageVariants = {
		center: { x: "0%", scale: 1, zIndex: 5 },
		left1: { x: "-30%", scale: 0.7, zIndex: 3 },
		left: { x: "-50%", scale: 0.5, zIndex: 2 },
		right: { x: "50%", scale: 0.5, zIndex: 1 },
		right1: { x: "30%", scale: 0.7, zIndex: 3 },
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				marginBlock: "2rem",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				width: "100%",
			}}
		>
			<h1
				style={{
					color: "white",
					fontFamily: "audiowide",
					flex: "0.1",
					fontSize: "3rem",
				}}
			>
				Dept Events
			</h1>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center",
					flex: "0.8",
				}}
			>
				{images.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						alt={image}
						initial="center"
						animate={positions[positionIndexes[index]]}
						variants={imageVariants}
						transition={{ duration: 0.5 }}
						style={{
							width: "50%",
							position: "absolute",
							borderRadius: "39px",
						}}
						onClick={() => handleImageClick(index)}
					/>
				))}
				<div
					style={{
						display: "flex",
						gap: "0.85rem",
					}}
				>
					<button
						style={{
							color: "white",
							marginTop: "500px",
							borderRadius: "20px",
							paddingBlock: "0.5rem",
							paddingInline: "1rem",
							backgroundColor: "transparent",
						}}
						onClick={handleBack}
					>
						<ArrowBackIos />
					</button>
					<div
						style={{
							marginTop: "500px",
							backgroundColor: "transparent",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "20px",
						}}
					>
						{images.map((_, index) => (
							<div
								key={index}
								onClick={() => handleDotClick(index)}
								style={{
									width: "10px",
									height: "10px",
									borderRadius: "50%",
									backgroundColor: "white",
									cursor: "pointer",
								}}
							></div>
						))}
					</div>
					<button
						style={{
							color: "white",
							marginTop: "500px",
							borderRadius: "20px",
							paddingBlock: "0.5rem",
							paddingInline: "1rem",
							backgroundColor: "transparent",
						}}
						onClick={handleNext}
					>
						<ArrowForwardIos />
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeptEvents;
