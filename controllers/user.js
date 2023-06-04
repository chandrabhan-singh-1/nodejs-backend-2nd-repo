import { UserAPI } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await UserAPI.find({});
  // console.log(req.query);

  const keyword = req.query.keyword;
  console.log(keyword);

  res.json({
    success: true,
    // user: users,
    users,
  });
};

export const newUser = async (req, res) => {
  const { name, email, password } = req.body;

  await UserAPI.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registered Successfully!",
  });
};

export const specialFunc = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking!",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params; //Use this method when you give dynamic routing/URL

  const user = await UserAPI.findById(id);
  // console.log(req.params);
  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params; //Use this method when you give dynamic routing/URL

  const user = await UserAPI.findById(id);
  // console.log(req.params);
  res.json({
    success: true,
    message: "User Updated!",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await UserAPI.findById(id);
  await user.remove();

  req.json({
    success: true,
    message: "User Deleted!",
  });
};
