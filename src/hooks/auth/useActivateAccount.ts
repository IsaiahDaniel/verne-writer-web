import { useMutation } from "@tanstack/react-query";
import { signUp2 } from "../../services/AuthService";
import { useForm } from "react-hook-form";
import useLocalStorage from "../localStorage/useLocalStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { OtpSchema } from "../../utils/validators/Auth.validators";
import { useNavigate } from "react-router-dom";
import { IActivateAccount } from "../../interfaces/IAuth";
import { useEffect } from "react";
import { handleError } from "@/utils/helpers/handleError";

const useActivateAccount = (token: string) => {

    const { handleSubmit, register, formState: { errors } } = useForm<IActivateAccount>({ resolver: zodResolver(OtpSchema) });
    const { getItem: getToken, setItem: setToken } = useLocalStorage("token");
    const { setItem: setUser, getItem: getUserInfo } = useLocalStorage("userInfo");
    const navigate = useNavigate();

    // const { user } = getUserInfo();

    // activate?token=2ee7b15ac922263705afc22bc672a2035f48f438

    // const token = getToken();

    useEffect(() => {
        activateAccount();
    }, [token]);

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: signUp2,
        onSuccess: (data: any) => {
            // console.log("success activate acct", data.data.data);
            setUser(data.data.data);
            setToken(data.data.token);
            navigate("/onboarding");
        },
        onError: (error) => {
            handleError(error);
        }
    });

    const activateAccount = () => {

        const userData = {
            // email: user.email,
            // password: user.password,
            // code: data.data.token,
            token: token,
        }

        mutate(userData);
    }

    return {
        isSuccess,
        isPending,
        handleSubmit,
        register,
        activateAccount,
        errors
    }
};

export default useActivateAccount;