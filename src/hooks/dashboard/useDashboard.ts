import { useEffect, useState } from "react";
import useLocalStorage from "../localStorage/useLocalStorage";

const useGetDashboard = () => {

    let user;
    const { getItem: getUser } = useLocalStorage("userInfo");
    const [username, setUsername] = useState("");

    useEffect(() => {
        user = getUser();
        if(user){
            setUsername(user.user.username);
        }
        
    }, []);

    return {
        username
    }

}

export default useGetDashboard;