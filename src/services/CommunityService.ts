import axios from '../axiosinstance';


export const createCommunity = async (communityData: any) => {
    const response = await axios.post("/communities", communityData);

    return response.data;
}


export const getCommunities = async () => {
    const response = await axios.get("/communities");

    return response.data;
}


export const getCommunity = async (communityId: string) => {
    const response = await axios.get(`/communities/${communityId}`);

    return response.data;
}
