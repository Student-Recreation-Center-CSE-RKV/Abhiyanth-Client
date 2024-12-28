import React from "react";
import { Box } from "@mui/material";

const HorizontalScrollBox = ({ items, renderCard }) => {
	return (
		<Box
			sx={{
				display: "block",
				overflowX: "auto",
				whiteSpace: "nowrap",
				"&::-webkit-scrollbar": { display: "none" }, 
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "16px", 
				}}
			>
				{items.map((item, index) => (
					<Box
						key={index}
						sx={{
							minWidth: "300px", 
							flexShrink: 0,
						}}
					>
						{renderCard(item, index)}
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default HorizontalScrollBox;
