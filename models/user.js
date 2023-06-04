import mongoose from "mongoose";

const apiSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const UserAPI = new mongoose.model("UserAPI", apiSchema);
