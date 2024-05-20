import { Box, Card } from "@mui/material";
import { Props } from "./Stepper";
import Step from "./Steps/Step";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
const ProfileComponent = ({ step, setStep }: Props) => {
  return (
    <main >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { md: 5, xs: 5 },
          padding: { md: "0 0", xs: "0 1rem" },
          // width: "500px",
        }}
      >
        <Card
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 4,
            borderRadius: 2,
            width: "500px",
          }}
          variant="outlined"
        >
          {step[step.length - 1] === 0 && <Step setStep={setStep} />}
          {step[step.length - 1] === 1 && <Step1 setStep={setStep} />}
          {step[step.length - 1] === 2 && <Step2 />}
        </Card>
      </Box>
    </main>
  );
};

export default ProfileComponent;
