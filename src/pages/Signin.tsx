import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import VerneLogo from "../assets/images/verne-logo.svg";
import FacebookIcon from "../assets/icons/FacebookIcon";
import GoogleIcon from "../assets/icons/GoogleIcon";
import Card from "../common/Card";
import { Input } from "@material-tailwind/react";
import { useAuth } from "../auth";
import React, { useState } from "react";
import {
  login,
  saveTokenInLocalStorage,
  saveUserInLocalStorage,
} from "../services/AuthService";
import { toast } from "react-toastify";
import useRegister from "../hooks/auth/useRegister";
import useLogin from "../hooks/auth/useLogin";

const Signin = () => {
  const auth: any = useAuth();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = useLogin();

  console.log("register", register);

  // const handleSubmit = () => {
  //   if (!email) {
  //     setErrEmail("Email is required");
  //     return;
  //   }
  //   if (!password) {
  //     setErrPassword("Password is required");
  //     return;
  //   }
  //   setLoading(true);
  //   const sendData = {
  //     email: email,
  //     password: password,
  //   };
  //   console.log(sendData);
  //   login(sendData)
  //     .then(async (response) => {
  //       console.log(response);
  //       if (response.data.success) {
  //         toast.success(
  //           response.data.message
  //             ? response.data.message
  //             : "Successfully Signed-In"
  //         );
  //         await saveUserInLocalStorage(response.data.user);
  //         await saveTokenInLocalStorage(response.data.token);
  //         setLoading(false);
  //         auth?.signup(response.data.user);
  //         navigate("/dashboard");
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err);
  //     });
  // };

  console.log({ email, password });

  return (
    <>    
      <div className="pl-10 bg-red-4000 pt-10 bg-[#F0FAFF]">
        <img src={VerneLogo} alt="" className="ml-[40px]" />
      </div>
      <main className="w-full h-[100%] mx-auto py-[49px] flex flex-col justify-center bg-[#F0FAFF]">
        <section className="w-[50%] md:w-[40%] mx-auto my-10">
          <Card classNames="w-[90%]">
            <div className="mb-[20px]">
              <h2 className="text-[#131313] text-center py-2 text-[36px] font-normal">
                Sign In
              </h2>
              <p className="text-center">
                Welcome to our writer’s community. Please sign in to <br />{" "}
                proceed on your publishing journey.
              </p>
            </div>

            <div>
              <div className="w-full mb-[20px]">
                <Input
                  label="Email"
                  value={email}
                  onChange={(e: React.FormEvent) => setEmail((e.target as any).value)}
                />
                {/* {errEmail && <div className="text_error">{errEmail}</div>} */}
              </div>

              <div className="w-full mb-[20px]">
                <Input
                  label="Password"
                  value={password}
                  onChange={(e: React.FormEvent) => setPassword((e.target as any).value)}
                />
                {/* {(errPassword) && <div className='text_error'>{errPassword}</div>} */}
                <small className="text-[#006969] text-sm font-medium mb-3">
                  Forgot Password?
                </small>
              </div>

              <div className="mt-3">
                <Button
                  text="Sign In"
                  // bgcolor="#025077"
                  classNames="bg-[#025077] text-white"
                  disabled={!email || !password}
                />
              </div>

              <div className="flex items-center mt-5">
                <div className="border border-[0.1] border-[#CDCDCD] w-full mr-4" />
                <span className="font-bold text-[14px]">OR</span>
                <div className="border border-[0.3] border-[#CDCDCD] w-full ml-4" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <Button
                text="Create Account With facebook"
                bgcolor="#1877F2"
                withIcon
                Icon={FacebookIcon}
                classNames="text-white"
              />

              <Button
                text="Create Account With Google"
                bgcolor="#fff"
                withIcon
                Icon={GoogleIcon}
                classNames="text-black border border-[#CDCDCD]"
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <span>Already have an account?</span>
              <Link to="/signup" className="text-[#006969] ml-1">
                Sign up
              </Link>
            </div>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Signin;
