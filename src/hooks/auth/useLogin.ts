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
    const { setItem: setUser, getItem: getUserInfo } = useLocalStorage("userInfo");
    const { setItem: setToken, removeItem: removeUser } = useLocalStorage("token");


    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (formData: any) => login(formData),
        onSuccess: (data) => {
            setUser(data.data.data);
            setToken(data.data.token);
            navigate("/dashboard");
        },
        onError: (error: any) => {
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

        const siginInData = {
            ...data,
            identity: data.email
        }

        mutate(siginInData);
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