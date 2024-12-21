import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../../assets/images/Dark Gradient 06.png";
import city2 from "../../assets/images/Maskgroup.png";
import city3 from "../../assets/images/Dark Gradient 06.png";
import planet1 from "../../assets/images/Maskgroup.png";
import planet2 from "../../assets/images/sponsors_bg.jpeg";

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

	const images = [city1, city2, city3, planet1, planet2];

	const positions = ["center", "left1", "left", "right", "right1"];

	const imageVariants = {
		center: { x: "0%", scale: 1, zIndex: 5 },
		left1: { x: "-50%", scale: 0.7, zIndex: 3 },
		left: { x: "-90%", scale: 0.5, zIndex: 2 },
		right: { x: "90%", scale: 0.5, zIndex: 1 },
		right1: { x: "50%", scale: 0.7, zIndex: 3 },
	};
	return (
		<div style={{
            display:"flex",
            flexDirection:"column",
            margin:"2rem",
            gap:"1rem",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh",
            width:"100vw"
        }} className="dept-events">
            <h1 style={{color:"white"}}>Dept Events </h1>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center",
					backgroundColor: "black",
					height: "100vh",
				}}
			>
				{images.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						alt={image}
						className="rounded-[12px]"
						initial="center"
						animate={positions[positionIndexes[index]]}
						variants={imageVariants}
						transition={{ duration: 0.5 }}
						style={{ width: "40%", position: "absolute" }}
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
							marginTop: "400px",
							backgroundColor: "indigo",
							borderRadius: "20px",
							paddingBlock: "0.5rem",
							paddingInline: "1rem",
						}}
						onClick={handleBack}
					>
						Back
					</button>
					<button
						style={{
							color: "white",
							marginTop: "400px",
							backgroundColor: "indigo",
							borderRadius: "20px",
							paddingBlock: "0.5rem",
							paddingInline: "1rem",
						}}
						onClick={handleNext}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeptEvents;
