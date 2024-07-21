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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { errors, handleLogin, register, handleSubmit, isPending } = useLogin();

  return (
    <>    
      <div className="pl-10 bg-red-4000 pt-10 bg-[#F0FAFF]">
        <img src={VerneLogo} alt="" className="ml-[40px]" />
      </div>
      <main className="w-full h-[100%] mx-auto py-[49px] flex flex-col justify-center bg-[#F0FAFF]">
        <form onSubmit={handleSubmit(handleLogin)} className="w-[50%] md:w-[40%] mx-auto my-10">
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
                  
                  {...register("email", { required: true })}
                  
                />
                 {errors.email && <div className="text-red-400 text-xs">{errors.email.message}</div>}
              </div>

              <div className="w-full mb-[20px]">
                <Input
                  label="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <div className="text-red-400 text-xs">{errors.password.message}</div>}
                <small className="text-[#006969] text-sm font-medium mt-10 mb-3">
                  Forgot Password?
                </small>
              </div>

              <div className="mt-3">
                <Button
                  text={isPending ? "loading..." : "Sign In"}
                  // bgcolor="#025077"
                  classNames="bg-[#025077] text-white"
                  disabled={isPending}
                  type="submit"
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
        </form>
      </main>
    </>
  );
};

export default Signin;
