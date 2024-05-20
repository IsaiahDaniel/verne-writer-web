import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/AuthService";
import { IRegister } from "../../interfaces/IAuth";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validators/Auth.validators";
import useLocalStorage from "../localStorage/useLocalStorage";
import { useEffect } from "react";

const useRegister = () => {

    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } } = useForm<IRegister>({ resolver: zodResolver(registerSchema) });
    const { setItem, getItem: getUserInfo } = useLocalStorage("userInfo");
    const { setItem: setToken, removeItem: removeUser } = useLocalStorage("token");

    // const { user } = getUserInfo();

    // useEffect(() => {
    //     if (user) {
    //         navigate("/onboarding");
    //     }
    // }, []);

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (formData: IRegister) => signUp(formData),
        onSuccess: (data) => {
            console.log("data", data);
            const { data: registerData } = data;
            console.log("registerData", registerData);
            setToken(registerData.data);
            navigate("/verify", { state: registerData.data });
        },
        onError: (error: any) => {
            console.log("error Register 123", error);
            removeUser();
        }
    });

    const handleRegister = (data: IRegister) => {

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
        handleRegister,
        isSuccess,
        isPending,
        handleSubmit,
        register,
        errors
    }

}

export default useRegister;