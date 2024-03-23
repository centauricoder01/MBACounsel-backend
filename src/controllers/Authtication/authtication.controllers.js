import Joi from "joi";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authtication } from "../../models/Authtication/Authtication.model.js";

export const addAuthUser = async (req, res) => {
  try {
    const saltRounds = Number(process.env.GEN_SALT);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = new authtication({
      name: req.body.name,
      phoneNo: req.body.phoneNo,
      currentEducation: req.body.currentEducation,
      location: req.body.location,
      courseLooking: req.body.CourseLooking,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const loginAuthUser = async (req, res) => {
  try {
    const user = await authtication.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate a JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Send the user's details and the token
    res.json({ user, token, message : "User Login Sucessfull" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

export const getAuthUser = async (req, res) => {
  try {
    const allUsers = await authtication.find();
    res.status(200).json({
      success: true,
      message: "All User retrieved successfully",
      data: allUsers,
    });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      res.status(400).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
};

export const deleteAuthUser = async (req, res) => {
  try {
  } catch (error) {}
};
