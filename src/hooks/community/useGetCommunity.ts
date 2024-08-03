import { getCommunities, getCommunity } from "@/services/CommunityService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const useGetCommunity = (communityId: string) => {

    const navigate = useNavigate();

    const [selectedIndex, setSelectIndex] = useState(0);

    const GROUP_CATEGORIES = [
        { id: 1, name: "Discussion" },
        { id: 2, name: "Rules" },
        { id: 3, name: "Members" },
    ];

    const COMMUNITY_GROUPS = [
        {
            id: 1,
            title: "Why is there so much persecution of brethren worldwide?",
            created_by: "John Hughes",
            people: "John Gboyega & 122 others are members",
            desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tincidunt eu consequat risus pellentesque massa erat proin. Quis amet amet proin sit mauris a vehicula tortor. Urna ut tincidunt lacus ante. Sit id posuere aliquet volutpat diam maecenas a a.",
            published_date: "11/9/2023",
            joinLink: "11:09PM",
        },
        {
            id: 2,
            title: "Why is there so much persecution of brethren worldwide?",
            created_by: "John Hughes",
            people: "John Gboyega & 122 others are members",
            desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tincidunt eu consequat risus pellentesque massa erat proin. Quis amet amet proin sit mauris a vehicula tortor. Urna ut tincidunt lacus ante. Sit id posuere aliquet volutpat diam maecenas a a.",
        },
    ];

    const COMMUNITY_RULES = [
        {
            id: 1,
            title: "Respect",
            desc: "Avoid discriminatory or offensive language, including hate speech, slurs, and insults.",
            summary:
                "Words have the power to build bridges or burn them. In our writing community, we strive to create a space where everyone feels welcome, respected, and valued. This means fostering an environment free from discriminatory or offensive language, including hate speech, slurs, and insults.",
        },
        {
            id: 2,
            title: "Privacy",
            desc: "Maintain confidentiality and avoid sharing personal information about other members without their consent.",
            summary:
                "Maintaining confidentiality allows members to feel safe and comfortable sharing their work and participating in discussions. It fosters an environment of trust and respect, where everyone feels valued and protected.",
        },
        {
            id: 3,
            title: "Professionalism",
            desc: "Engage in constructive criticism and feedback, focusing on the work itself and avoiding personal attacks.",
            summary:
                "Constructive criticism is a valuable tool for growth, but it should always be delivered with respect and empathy. By focusing on the work itself and offering actionable suggestions, we can create a supportive environment where everyone feels comfortable sharing their work and learning from each other.",
        },
    ];

    const { isPending, isError, isSuccess, data, error, refetch } = useQuery({
        queryKey: ["getCommunity"],
        queryFn: () => getCommunity(communityId),
    });


    return {
        isError,
        isPending,
        data,
        error,
        selectedIndex,
        setSelectIndex,
        GROUP_CATEGORIES,
        COMMUNITY_GROUPS,
        COMMUNITY_RULES,
        refetch,
        navigate,
    }

}


export default useGetCommunity;