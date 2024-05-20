import { useMutation } from "@tanstack/react-query";
import { signUp2 } from "../../services/AuthService";
import { useForm } from "react-hook-form";
import useLocalStorage from "../localStorage/useLocalStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { OtpSchema } from "../../utils/validators/Auth.validators";
import { useNavigate } from "react-router-dom";
import { IActivateAccount } from "../../interfaces/IAuth";

const useActivateAccount = () => {

    const { handleSubmit, register, formState: { errors } } = useForm<IActivateAccount>({ resolver: zodResolver(OtpSchema) });
    const { getItem: getToken } = useLocalStorage("token");
    const { setItem: setUser, getItem: getUserInfo } = useLocalStorage("userInfo");
    const navigate = useNavigate();

    const { user } = getUserInfo();

    const token = getToken();

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: signUp2,
        onSuccess: (data: any) => {
            console.log(data)
            navigate("/onboarding");
        }
    });

    const activateAccount = (data: any) => {

        const userData = {
            email: user.email,
            password: user.password,
            code: data.data.token,
            token_id: token,
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