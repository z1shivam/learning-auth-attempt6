"use server";
import { RegisterSchema } from "@/schemas/authSchema";
import bcrypt from "bcryptjs";
import { z } from "zod";
import User, { Users } from "@/model/userModel";
import dbConnect from "@/lib/dbConnect";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  await dbConnect();
  const { email, password, name } = values;
  const user = await User.findOne({ email });
  if (user) {
    return { error: "User already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    email,
    password: hashedPassword,
    name,
  });
  return { success: "User created successfully" };
};
