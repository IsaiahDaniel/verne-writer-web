import Aside from "../components/Aside";
import VerneLogo from "../assets/images/verne-logo.svg";
import Card from "../common/Card";
import { Input } from "@material-tailwind/react";
import Button from "../common/Button";
import FacebookIcon from "../assets/icons/FacebookIcon";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { Link } from "react-router-dom";
import useRegister from "../hooks/auth/useRegister";

const Signup = () => {

  const { handleRegister, handleSubmit, isPending, register, errors } = useRegister();

  return (
    <>
      <div className="lg:pl-10 pt-10 bg-[#F0FAFF]">
        <img src={VerneLogo} alt="" className="ml-[40px]" />
      </div>

      <main className="w-full h-[95vh] flex flex-col justify-center mx-auto bg-[#F0FAFF] my-10">
        <div className="grid md:grid-cols-2">
          <div className="hidden lg:block">
            <Aside />
          </div>

          <section className="flex flex-col justify-center">
            <Card classNames="w-full lg:w-[70%]">
              <div className="mb-[20px]">
                <h2 className="text-[#131313] text-center py-2 text-[36px] font-normal">
                  Create Account for Free
                </h2>
                <p className="text-center">
                  Join our community of writers and start publishing your <br />{" "}
                  books & thoughts for free.
                </p>
              </div>

              
              <form onSubmit={handleSubmit(handleRegister)}>
                <div className="w-full mb-[20px]">
                  <Input
                    label="Email"
                    {...register("email", { required: true })}
                    error={errors.email ? true : false}
                  />
                  {errors.email && <div className="text-red-400 text-xs">{errors.email.message}</div>}
                </div>

                <div className="w-full mb-[20px]">
                  <Input
                    label="Password"
                    type="password"
                    {...register("password")}
                    error={errors.password ? true : false}
                  />
                  {errors.password && <div className="text-red-400 text-xs">{errors.password.message}</div>}
                </div>

                <div className="w-full mb-[20px]">
                  <Input
                    label="Confirm Password"
                    type="password"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword ? true : false}
                  />
                  {errors.confirmPassword && <div className="text-red-400 text-xs">{errors.confirmPassword.message}</div>}
                </div>

                <div>
                  <Button
                    text={isPending ? "Loading..." : "Create Account"}
                    classNames="bg-[#025077] text-white py-3"
                    disabled={isPending}
                    type="submit"
                  />
                </div>

                <div className="flex items-center mt-5">
                  <div className="border border-[0.1] border-[#CDCDCD] w-full mr-4" />
                  <span className="font-bold text-[14px]">OR</span>
                  <div className="border border-[0.3] border-[#CDCDCD] w-full ml-4" />
                </div>
              </form>

              <div className="mt-4 space-y-3">
                <Button
                  text="Create Account With facebook"
                  withIcon
                  Icon={FacebookIcon}
                  classNames="bg-[#1877F2] text-white"
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
                <Link to="/signin" className="text-[#006969] ml-1">
                  Login
                </Link>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
};

export default Signup;
