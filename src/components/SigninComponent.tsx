import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Input from "../common/Input";
import ButtonInput from "../common/ButtonInput";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import google from "../assets/google.svg";
const SiginComponent = () => {
  return (
    <Card
      sx={{
        padding: { md: "0 1rem", xs: "0 2rem" },
        margin: { md: "0 22rem" },
        borderRadius: 5,
      }}
    >
      <CardContent sx={{ marginTop: { md: 6, xs: 2 }, borderRadius: 4 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {" "}
          Sign in
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            fontSize: { md: "15px", xs: "10px" },
          }}
        >
          Welcome to our writer’s community. Please sign in to proceed on your
          publishing journey.
        </Typography>
        <Box>
          <Input label="Email" type="email" />
          <Input label="password" type="password" />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: { md: "15px", xs: "10px" } }}
        >
          Forgot password?
        </Typography>
        <ButtonInput label="Create Account" color="#000" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "Center",
            marginTop: 4,
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
            sx={{ padding: "0 7px ", fontFamily: "Basley" }}
          >
            OR
          </Typography>
          <Typography
            sx={{
              width: "100%",
              borderBottom: "1px solid #D9D9D9",
              margin: "10px 0",
            }}
          />
        </Box>
        <Box>
          <ButtonInput
            color="#1877f2"
            startIcon={<FacebookOutlinedIcon />}
            label="Sign in With Facebook"
          />
        </Box>
        <Button
          sx={{
            marginTop: 3,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "#000",
            backgroundColor: "#fff",
            padding: 1.4,
          }}
          fullWidth
          variant="contained"
          startIcon={<img src={google} alt="google" className="logo" />}
        >
          Sign in with Google
        </Button>
        <Typography
          variant="subtitle1"
          sx={{ margin: "1rem 0", textAlign: "center" }}
        >
          Don't have an account? <span className="anchor">Sign up</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SiginComponent;
