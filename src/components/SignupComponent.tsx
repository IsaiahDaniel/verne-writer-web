import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import google from "../assets/google.svg";

import Input from "../common/Input";
import ButtonInput from "../common/ButtonInput";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="h5"
        color="#000"
        gutterBottom
        sx={{ fontSize: { xs: "1.2rem" }, fontWeight: { xs: "bold" } }}
      >
        Create Account for Free
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: { xs: "12px", md: "15px" } }}
      >
        Join our community of writers and start publishing your books & thoughts
        for free
      </Typography>
      <Box>
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Input label="Confirm Password" type="password" />
        <ButtonInput color="#000" label="Create Account" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "Center",
          marginTop: { md: 4, xs: 2 },
        }}
      >
        <Typography
          sx={{
            width: "100%",
            borderBottom: "1px solid #D9D9D9",
            margin: "10px 0",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            padding: { md: "0 7px ", xs: "0 3px" },
            fontSize: { xs: "10px", md: "15px" },
            fontFamily: "Basley",
          }}
        >
          OR
        </Typography>
        <Typography
          sx={{
            width: "100%",
            borderBottom: "1px solid #D9D9D9",
            margin: { md: "10px 0", xs: "3px 0" },
          }}
        />
      </Box>

      <Box>
        <ButtonInput
          color="#1877f2"
          startIcon={<FacebookOutlinedIcon />}
          label="Create Account With Facebook"
        />
      </Box>
      <Button
        sx={{
          marginTop: { md: 3, xs: 2 },
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "#000",
          backgroundColor: "#fff",
          padding: { md: 1.4, xs: 1 },
          fontSize: { md: "15px", xs: "8px" },
        }}
        fullWidth
        variant="contained"
        startIcon={<img src={google} alt="google" className="logo" />}
      >
        Create Account with Google
      </Button>
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
);

export default function SignupComponent({
  setStep,
}: {
  setStep: (text: number) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        Width: 200,
      }}
    >
      <Card
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
          borderRadius: 5,
        }}
        variant="outlined"
      >
        {card}
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            margin: { md: "15px 0", xs: "14px 0" },
            fontSize: { md: "15px", xs: "10px" },
          }}
        >
          Already have an account?{" "}
          <a className="anchor" href="#" onClick={() => setStep(1)}>
            Login
          </a>
        </Typography>
      </Card>
    </Box>
  );
}
