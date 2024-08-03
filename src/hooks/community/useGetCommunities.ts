import { getCommunities } from "@/services/CommunityService";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const useGetCommunities = () => {

    const navigate = useNavigate();

    const { isPending, isError, isSuccess, data, error, refetch } = useQuery({
        queryKey: ["getCommunities"],
        queryFn: getCommunities,
    });


    return {
        isError,
        isPending,
        data,
        error,
        navigate,
        refetch
    }

}


export default useGetCommunities;