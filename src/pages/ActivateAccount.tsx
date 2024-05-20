import {
  Box,
  Input,
  Typography,
} from "@mui/material";

import Aside from "../components/Aside";
import EmailFeedback from "../assets/images/feedback-image.png";
import Button from "../common/Button";
import Card from "../common/Card";
import useActivateAccount from "../hooks/auth/useActivateAccount";

const ActivateAccount = () => {

  const { isPending, handleSubmit, activateAccount, register, errors } = useActivateAccount();

  return (
    <main className="w-full flex flex-col items-center justify-center h-screen mx-auto py-[49px] bg-[#F0FAFF]">
      <div className="grid md:grid-cols-2">
        <div>
          <Aside />
        </div>

        <form onSubmit={handleSubmit(activateAccount)}>
          <Card classNames="w-full lg:w-[70%]">
            <Typography
              variant="h4"
              sx={{
                fontSize: { md: "36px", xs: "15px" },
                textAlign: { md: "center" },
                fontWeight: { md: "400" },
              }}
            >
              Yay!!! Your account has been created
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                marginTop: 2,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: { md: "400" },
              }}
            >
              Just one small step. We have sent an activation link to your email.
              Click the link to activate your account.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: { md: 5, xs: 3 },
              }}
            >
              <img src={EmailFeedback} />
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                marginTop: 2,
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              <div>
                <Input
                  {...register("code")}
                />
              </div>
              <span className="text-red-500 text-xs">{errors.code && errors.code.message}</span>
            </Typography>

            <Button
              text={isPending ? "Loading..." : "Create Account"}
              classNames="bg-[#025077] text-white py-3 mt-5"
              disabled={isPending}
              type="submit"
            />
          </Card>
        </form>
      </div>
    </main>
  );
};

export default ActivateAccount;
