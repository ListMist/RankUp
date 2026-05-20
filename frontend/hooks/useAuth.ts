import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({message:"invalid Formate"}),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});


export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }), 
  email: z.string().email({ message: "Invalid email address format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["Programmer", "Coach"], { 
    message: "Select a valid role" 
  }),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;