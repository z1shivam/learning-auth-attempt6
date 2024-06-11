
import dbConnect from "../lib/dbConnect";
import User, { Users } from "@/model/userModel";

export const verifyUser = async (email: string, pwHash: string) => {
  await dbConnect().then(async () => {
    const user = await User.findOne({ email });
    if(!user) return null;
    if (pwHash === user.password) {
      return user;
    }
  });
  return null;
};
