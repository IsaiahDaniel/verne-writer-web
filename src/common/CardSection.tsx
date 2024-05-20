import { Box, Card, CardContent, Typography } from "@mui/material";
import DoDisturbOnSharpIcon from "@mui/icons-material/DoDisturbOnSharp";
import React from "react";
export interface FINANCE {
	name: string;
	currency?: string;
	amount: string;
	message: string;
}

const CardSection = ({ name, currency, amount, message }: FINANCE) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="subtitle1" sx={{ color: "#727272", margin: { md: "7px 0", xs: "0 0" } }}>
					{name}
				</Typography>
				<Typography
					variant="h4"
					sx={{
						margin: "7px 0",
						color: "#252525",
						font: "Inter",
						fontSize: { md: "2rem", xs: "1rem" },
					}}>
					{currency && currency} {amount}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
						color: "#727272",
						marginBottom: { md: 3, xs: 1 },
					}}>
					<DoDisturbOnSharpIcon sx={{ fontSize: { md: 30, xs: 17 } }} />
					<Typography variant="subtitle2" sx={{ fontSize: { md: ".9rem", xs: ".7rem" } }}>
						{message}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CardSection;
