import { useMutation } from "@tanstack/react-query";
import {  ILogin, IRegister } from "../../interfaces/IAuth";
import { login } from "../../services/AuthService";
import { handleError } from "@/utils/helpers/handleError";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/validators/Auth.validators";
import useLocalStorage from "../localStorage/useLocalStorage";

const useLogin = () => {

    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm<ILogin>({ resolver: zodResolver(loginSchema) });
    const { setItem, getItem: getUserInfo } = useLocalStorage("userInfo");
    const { setItem: setToken, removeItem: removeUser } = useLocalStorage("token");

    // const { user } = getUserInfo();

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (formData: any) => login(formData),
        onSuccess: (data) => {
            console.log("login data", data);
            // const { data: registerData } = data;
            // console.log("registerData", registerData);
            // setToken(registerData.data);
            // navigate("/dashboard");
            // toast.success(data.data.message);
        },
        onError: (error: any) => {
            console.log("error login 123", error);
            // removeUser();
            // console.log("activation error", error);
            handleError(error);
        }
    });

    const handleLogin = (data: ILogin) => {

        const userInfo = {
            user: {
                email: data.email,
                password: data.password
            },
        }

        setItem(userInfo);

        mutate(data);
    }

    return {
        handleSubmit,
        handleLogin,
        register,
        errors,
        isPending
    }
}

export default useLogin;