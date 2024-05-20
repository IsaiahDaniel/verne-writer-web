import { Button } from "@mui/material";
import React from "react";

interface Props {
	label: string;
	color: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	startIcon?: any;
}

const ButtonInput = ({ label, color, startIcon }: Props) => {
	return (
		<Button
			sx={{
				backgroundColor: color,
				marginTop: 3,
				padding: 1.4,
				borderRadius: 2,
				fontSize: { xs: "8px", md: "15px" },
			}}
			fullWidth
			variant="contained"
			startIcon={startIcon && startIcon}>
			{label}
		</Button>
	);
};

export default ButtonInput;
