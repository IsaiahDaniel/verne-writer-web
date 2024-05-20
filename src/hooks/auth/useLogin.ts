import { useMutation } from "@tanstack/react-query";
import { IAuth } from "../../interfaces/IAuth";
import { login } from "../../services/AuthService";

const useLogin = () => {
    const loginMutation = useMutation({
        mutationFn: (formData: IAuth) => login(formData)
    });

    return {
        loginMutation
    }
}

export default useLogin;