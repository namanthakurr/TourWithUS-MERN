import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

// ------------------------------- Authentication

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove the password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    userId: user._id, // Include userId in the response
    data: {
      user,
    },
  });
};

export async function signup(req, res) {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      return res
        .status(400)
        .json({ status: "error", error: "Passwords do not match" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    // console.log("New User:", newUser); Debugging line

    createSendToken(newUser, 201, res); // Send token and user data including userId
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", error: "Error during signup" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", error: "Please provide email and password!" });
    }

    const user = await User.findOne({ email }).select("+password");

   // console.log("User:", user);  Debugging line

    if (!user) {
      return res
        .status(401)
        .json({ status: "error", error: "Incorrect email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: "error", error: "Incorrect email or password" });
    }

    createSendToken(user, 200, res); // Send token and user data including userId
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ status: "error", error: "Error during login" });
  }
}

export function logout(req, res) {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
  });
}
