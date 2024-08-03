import { googleSignIn } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const useGoogleLogin = () => {
    const { mutate, isSuccess } = useMutation({
        mutationFn: googleSignIn,
        mutationKey: ["googleLogin"]
    });

    const handleGoogleLogin  = () => mutate();

    return {
        handleGoogleLogin
    }

}


export default useGoogleLogin;