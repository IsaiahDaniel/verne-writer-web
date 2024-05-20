/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Grid, Button } from "@mui/material";
import Input from "../../common/Input";
const Step1 = ({ setStep }: { setStep: (num: any) => void }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: { md: 5, xs: 3 },
          fontSize: { md: "2rem", xs: "1.3rem" },
        }}
      >
        Create UserName
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          marginTop: { md: 2, xs: 0.8 },
          fontSize: { md: "15px", xs: "10px" },
        }}
      >
        {" "}
        lorem ipsum dolor sit amet conseteur.
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item md={6} xs={12}>
          <Input label="username" type="text" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Input label="domain" type="email" />
        </Grid>
      </Grid>
      <Button
        sx={{
          backgroundColor: "#000",
          marginTop: 3,
          padding: 1.4,
          borderRadius: 2,
        }}
        fullWidth
        variant="contained"
        onClick={() => setStep((prev: any) => [...prev, 2])}
      >
        Submit
      </Button>

      <Typography
        variant="h6"
        sx={{ textAlign: "center", margin: "4rem 0" }}
        onClick={() => setStep((prev: any) => [...prev, 2])}
      >
        Skip to Next Step
      </Typography>
    </Box>
  );
};

export default Step1;
