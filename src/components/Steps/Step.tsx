/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
const Step = ({ setStep }: { setStep: (num: any) => void }) => {
  const [visit, setVist] = useState([] as string[]);
  const Bio = [
    "Politics",
    "Fiction",
    "Religion",
    "Non-fiction",
    "Tech",
    "Art",
    "Business",
    "Romance",
    "Fashion",
  ];
  const getColor = (item: string) => visit.includes(item) && "#fff";
  const getBg = (item: string) => visit.includes(item) && "#454545";

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          marginTop: { md: 5, xs: 3 },
          fontSize: { md: "2.2rem", xs: "1.4rem" },
        }}
      >
        Title
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
        subtitle
      </Typography>
      <Grid container sx={{ flexGrow: 1, marginTop: 2 }} spacing={0.5}>
        {Bio.map((item) => (
          <Grid item xs={4} md={2.4} key={item}>
            <Typography
              onClick={() => setVist((prev) => [...prev, item])}
              variant="h5"
              sx={{
                fontSize: { md: "16px", xs: "14px" },
                marginBottom: 2,
                border: " 1px solid grey",
                textAlign: "center",
                cursor: "pointer",
                color: getColor(item) || "#000",
                backgroundColor: getBg(item) || "#fff",
              }}
            >
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={() => setStep((prev: any) => [...prev, 1])}
        sx={{
          backgroundColor: "#000",
          marginTop: 3,
          padding: 1.4,
          borderRadius: 2,
        }}
        fullWidth
        variant="contained"
      >
        Submit
      </Button>

      <Typography
        variant="h6"
        onClick={() => setStep((prev: any) => [...prev, 1])}
        sx={{
          textAlign: "center",
          margin: { md: "3rem 0", xs: "2rem 0" },
          fontSize: { md: "1.4rem", xs: "1rem" },
          cursor: "pointer",
        }}
      >
        Skip to Next Step
      </Typography>
    </Box>
  );
};

export default Step;
