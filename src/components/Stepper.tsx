/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid } from "@mui/material";
import VerneLogo from "../assets/images/Verne20.png";

export interface Props {
  setStep: (num: any) => void;
  step: number[];
}
const Stepper = ({ setStep, step }: Props) => {
  return (
    <main className="flex flex-col">
      <div>
        <img src={VerneLogo} alt="" className="w-40 ml-[40px]" />
      </div>
      <Grid sx={{ flexGrow: 1 }} container spacing={10} marginTop= {-20}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}>
          <Grid container justifyContent="center" spacing={0.5}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Box
                  onClick={() =>
                    setStep((prev: any) => [...prev, value as number])
                  }
                  sx={{
                    height: 6,
                    width: 100,
                    marginTop: { md: 17, xs: 7 },
                    backgroundColor: step.includes(value)
                      ? "#006969"
                      : "#FFFFFF",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </main>
  );
};

export default Stepper;
