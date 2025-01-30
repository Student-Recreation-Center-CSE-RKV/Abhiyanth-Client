import {
	Box,
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DailogBox = ({open,handleClose,stall}) => {

	
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth="md"
			fullWidth
			PaperProps={{
				sx: {
					background: "rgba(0, 0, 0, 0.8)", // Dark transparent background
					backdropFilter: "blur(10px)", // Glassmorphism effect
					border: "1px solid rgba(255, 255, 255, 0.2)",
					borderRadius: "20px",
					boxShadow: "0 4px 30px rgba(0, 255, 170, 0.3)", // Neon glow effect
					color: "white",
					padding: "0",
				},
			}}
		>
			<DialogTitle
				sx={{
					fontSize: "1.8rem",
					fontWeight: "bold",
					color: "#00ffc8", // Neon color
					textAlign: "center",
					borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
				}}
			>
				{stall.name} - Menu
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 16,
						top: 16,
						color: "white",
						"&:hover": {
							color: "#00ffc8",
						},
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent
				dividers
				sx={{
					"&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit browsers
					msOverflowStyle: "none", // Hide scrollbar for IE/Edge
					scrollbarWidth: "none", // Hide scrollbar for Firefox
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						background: "rgba(255, 255, 255, 0.05)",
						borderRadius: "10px",
						padding: "10px",
					}}
				>
					<iframe
						src={`${stall.menu_card}#toolbar=0&navpanes=0&scrollbar=0`}
						title="Menu PDF"
						width="100%"
						height="500px"
						style={{
							border: "2px solid rgba(255, 255, 255, 0.2)",
							borderRadius: "10px",
							boxShadow: "0 0 15px rgba(0, 255, 170, 0.3)",
							overflow: "hidden",
							scrolling: "no", // Disable visible scrollbar
						}}
					></iframe>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default DailogBox;
