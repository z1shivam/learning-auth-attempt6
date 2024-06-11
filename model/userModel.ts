import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
  },
});

// export default mongoose.models.User || mongoose.model<Users>("User", UserSchema);
export default mongoose.models?.User || mongoose.model("User", UserSchema);
