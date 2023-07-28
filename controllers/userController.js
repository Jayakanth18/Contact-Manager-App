const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//post
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error(
      "All the fields are mandatory like username, email and password."
    );
  }
  const userAvaliable = await User.findOne({ email });
  if (userAvaliable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
//   console.log("hashed password:", hashedPassword);
  const user =await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created`);
  if(user){
    res.status(201).json({_id: user.id, email: user.email})
  } else{
    res.status(400)
    throw new Error("User data is not valid")
  }
  res.json({ message: "Register the user" });
});
//post
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});
//get
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
