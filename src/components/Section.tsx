import { Box, Typography } from "@mui/material";

import Article from "./Article";
import Graph from "./Graph";
export interface FINANCE {
  name: string;
  currency?: string;
  amount: string;
  message: string;
}

const Section = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          font: "Inter",
          fontWeight: "bold",
          lineHeight: "31.47px",
          fontSize: { md: "2rem", xs: "1rem" },
        }}
      >
        Welcome, Dami!
      </Typography>
      <Box>
        <Article />
        <Graph />
      </Box>
    </Box>
  );
};

export default Section;
