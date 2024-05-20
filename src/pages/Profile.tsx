import React from "react";

import Stepper from "../components/Stepper";
import ProfileComponent from "../components/ProfileComponent";

const Profile = () => {
  const [step, setStep] = React.useState([0] as number[]);

  return (
    <>
      <Stepper step={step} setStep={setStep} />
      <ProfileComponent step={step} setStep={setStep} />
    </>
  );
};

export default Profile;
