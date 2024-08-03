import { ICreateCommunity } from "@/interfaces/ICommunity";
import { createCommunity } from "@/services/CommunityService";
import { handleError } from "@/utils/helpers/handleError";
import { createCommunitySchema } from "@/utils/validators/community.validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useCreateCommunity = () => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        rules: "",
        image: "",
    });

    const { description, name, image  } = formData;

    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm<ICreateCommunity>({ resolver: zodResolver(createCommunitySchema), reValidateMode: "onChange" });

    type TabType = "community" | "members" | "rules";

    const [selectedIndex, setSelectedIndex] = useState<TabType>("community");
    const [rules, setRules] = useState([{ id: 1, placeholder: "Enter Rule" }]);
  
    const [file, setFile] = useState<any>(null);
    const fileRef = useRef<any>();
  
    const addRules = () => {
      const newRule = {
        id: rules.length + 1,
        placeholder: "Enter Rule",
      };
  
      setRules([...rules, newRule]);
    };

    const { mutate, isPending } = useMutation({
        mutationKey: ["createCommunity"],
        mutationFn: (formData: any) => createCommunity(formData),
        onError: (error) => {
            handleError(error);
        },
        onSuccess: () => {
            navigate("/community-details");
        }
    });

    const handleCreateCommunity = (data: ICreateCommunity) => {

        console.log("creating comminit", data);

        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("description", data.description);
        // formData.append("rules", rules as any);
        formData.append("rules", "No spamming");
        formData.append("image", file as any, file?.name as string)
        

        mutate(formData);
    }

    return {
        mutate,
        handleCreateCommunity,
        addRules,
        selectedIndex,
        fileRef,
        file,
        rules,
        isPending,
        errors,
        setSelectedIndex,
        setRules,
        setFile,
        handleSubmit, 
        register,
    }

}


export default useCreateCommunity;