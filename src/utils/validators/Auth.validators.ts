import z from "zod";
import { IRegister } from "../../interfaces/IAuth";

export const registerSchema = z.object({
    email: z.string().email("Invalid email format").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters")        
}).refine((data: IRegister) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ['confirmPassword']
});

export const OtpSchema = z.object({
    code: z.string().min(6, "6 character code is required"),
});