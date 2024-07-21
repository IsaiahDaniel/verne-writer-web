import { completeOnboarding } from "@/services/AuthService";
import { handleError } from "@/utils/helpers/handleError";
import { onboardingSchema } from "@/utils/validators/onboarding.validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const useCompleteOnboarding = () => {

    const navigate = useNavigate();

    type TabType = "category" | "username" | "subscribers";

    const PILLS = [
        { id: 1, text: "Politics" },
        { id: 2, text: "Fiction" },
        { id: 3, text: "Religion" },
        { id: 4, text: "Non-fiction" },
        { id: 5, text: "Technology" },
        { id: 6, text: "Art" },
        { id: 7, text: "Business" },
        { id: 8, text: "Romance" },
    ];

    const { handleSubmit, register, formState: { errors } } = useForm<any>({ resolver: zodResolver(onboardingSchema) });

    const [preferences, setPreferences] = useState<any>([]);
    const [selectedIndex, setSelectedIndex] = useState<TabType>("category");
    const [subscribers, setSubscribers] = useState([
        { id: 1, placeholder: "Subscriber Email", label: "Subscriber Email", value: "" },
    ]);



    const handlePillClick = (pillText: string) => {
        if (!preferences.includes(pillText)) {
            setPreferences((prevPreferences: any) => [...prevPreferences, pillText]);
        } else {
            const filteredPills = preferences.filter((item: string) => item != pillText)
            setPreferences(filteredPills);
        }
    };

    const addSubscriber = () => {
        const newSubscriber = {
            id: subscribers.length + 1,
            placeholder: "Subscriber Email",
            label: "Subscriber Email",
            value: ""
        };

        setSubscribers([...subscribers, newSubscriber]);
    };

    const handleInputChange = (id: any, newValue: any) => {
        setSubscribers(subscribers.map(subscriber =>
            subscriber.id === id ? { ...subscriber, value: newValue } : subscriber
        ));
    };

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: completeOnboarding,
        onSuccess: (data: any) => {
            console.log("Complete Onboarding", data);
            // setUser(data.data.data);
            // setToken(data.data.token);
            navigate("/dashboard");
        },
        onError: (error) => {
            console.log("error", error);
            handleError(error);
        }
    });

    const handleCompleteProfile = (data: any) => {

        const onboardingData = {
            username: data.username + ".com",
            preferences: preferences,
            invitees: subscribers
        }

        console.log("onboardingData", onboardingData);

        mutate(onboardingData);
    }


    return {
        isPending,
        isSuccess,
        PILLS,
        selectedIndex,
        subscribers,
        preferences,
        errors,
        handleSubmit,
        setPreferences,
        addSubscriber,
        handlePillClick,
        setSelectedIndex,
        handleCompleteProfile,
        register,
        handleInputChange
    }

}


export default useCompleteOnboarding;