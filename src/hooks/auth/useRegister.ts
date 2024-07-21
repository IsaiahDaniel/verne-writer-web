import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/AuthService";
import { IRegister } from "../../interfaces/IAuth";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validators/Auth.validators";
import useLocalStorage from "../localStorage/useLocalStorage";
import { useEffect } from "react";
import { handleError } from "@/utils/helpers/handleError";
import { toast } from "react-toastify";

const useRegister = () => {

    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } } = useForm<IRegister>({ resolver: zodResolver(registerSchema) });
    const { setItem, getItem: getUserInfo } = useLocalStorage("userInfo");
    const { setItem: setToken, removeItem: removeUser } = useLocalStorage("token");


    useEffect(() => {
        // const { user } = getUserInfo();
        // // console.log("user", user);
        // if (user) {
        //     navigate("/onboarding");
        // }
        const userInfo = getUserInfo();
        if (userInfo && userInfo.user) {
            navigate("/onboarding");
        }
    }, []);

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (formData: IRegister) => signUp(formData),
        onSuccess: (data) => {
            console.log("data", data);
            // const { data: registerData } = data;
            // console.log("registerData", registerData);
            // setToken(registerData.data);
            navigate("/activate");
            toast.success(data.data.message);
        },
        onError: (error: any) => {
            // console.log("error Register 123", error);
            // removeUser();
            // console.log("activation error", error);
            handleError(error);
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