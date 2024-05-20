import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import PersonReading from "../assets/images/cuate.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: 1,
    label: "Onboarding Title",
    content: "Lorem ipsum dolor sit amet consectetur. Convallis proin erat nibh nisl morbi. Ornare sed sed amet pharetra justo.",
    imgPath: PersonReading,
  },
  {
    id: 2,
    label: "Onboarding Title",
    content: "Lorem ipsum dolor sit amet consectetur. Convallis proin erat nibh nisl morbi. Ornare sed sed amet pharetra justo.",
    imgPath: PersonReading,
  },
  {
    id: 3,
    label: "Onboarding Title",
    content: "Lorem ipsum dolor sit amet consectetur. Convallis proin erat nibh nisl morbi. Ornare sed sed amet pharetra justo.",
    imgPath: PersonReading,
  },
  {
    id: 4,
    label: "Onboarding Title",
    content: "Lorem ipsum dolor sit amet consectetur. Convallis proin erat nibh nisl morbi. Ornare sed sed amet pharetra justo.",
    imgPath: PersonReading,
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    // console.log(step);
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: { md: 400, xs: 300 },

        flexGrow: 1,
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.id}>
            <div className="mb-10">
              <h2 className="text-[36px] text-center">
                {step.label}
              </h2>
              <p>{step.content}</p>
            </div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { md: "400px", xs: "300px" },
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: { md: 10, xs: 3 },
                  // backgroundColor: "#BABABA",
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          backButton={undefined}
          nextButton={undefined}
          sx={{
            backgroundColor: "#F0FAFF",
            color: "#000",
            marginTop: { md: 5, xs: 2 },
          }}
        />
      </div>
    </Box>
  );
}

export default Carousel;
