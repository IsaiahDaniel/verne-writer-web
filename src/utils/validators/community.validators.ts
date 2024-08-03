import z from "zod";
import { IRegister } from "../../interfaces/IAuth";

export const createCommunitySchema = z.object({
    name: z.string().min(1, "Name is required"), 
    description: z.string().min(6, "Description must be at least 6 characters")
});