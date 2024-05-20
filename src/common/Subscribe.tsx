import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Subscribe = () => {
	return (
		<Grid container spacing={2} sx={{ margin: "3rem 0  " }}>
			<Grid item xs={6}>
				<Typography variant="h4" sx={{ font: "Inter", color: "#252525" }}>
					0
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}>
					<Typography
						sx={{
							backgroundColor: "#B6B6B6",
							height: "10px",
							marginRight: 1,
							width: "10px",
						}}
					/>
					<Typography variant="subtitle1" sx={{ color: "#727272" }}>
						Free Subscriber
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h4" sx={{ font: "Inter", color: "#252525" }}>
					0
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}>
					<Typography
						sx={{
							backgroundColor: "#424242",
							height: "10px",
							marginRight: 1,
							width: "10px",
						}}
					/>
					<Typography variant="subtitle1" sx={{ color: "#727272" }}>
						Paid Subscriber
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Subscribe;
