import Joi from "joi";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authtication } from "../../models/Authtication/Authtication.model.js";
import nodemailer from "nodemailer";

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
    res.json({ user, token, message: "User Login Sucessfull" });
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

export const sendVerificationMail = async (req, res) => {
  try {
    const { email } = req.body;

    const fromemail = process.env.MAIL_USERNAME;
    const pass = process.env.MAIL_PASSWORD;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromemail,
        pass: pass,
      },
    });

    const randomOTP = Math.floor(Math.random() * 900000) + 100000;

    let mailOptions = {
      from: {
        name: "cityeduguide",
        address: fromemail,
      },
      to: email,
      subject: "Verification Mail",
      html: `<h1>Your OTP for Verification</h1>
        <h2>${randomOTP}</h2>
        <p>Please Don't share it with anyone and it is valid for 10 min</p>
        <p>Enter this otp to verify your mail...</p>
      `,
    };

    await authtication.findOneAndUpdate(
      { email },
      { otp: randomOTP },
      { new: true },
    );

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.send({ message: error });
      } else {
        res.send({ message: info.response });
      }
    });
  } catch (error) {
    res.json(500).send({ message: "some Error occured", error });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await authtication.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (user.otp === otp) {
      res.status(200).json({ message: "OTP Verified, Access Granted" });
    } else {
      res.status(400).json({ message: "OTP not verified, Access Denied" });
    }
  } catch (error) {
    res.json(500).send({ message: "some Error occured", error });
  }
};

export const deleteAuthUser = async (req, res) => {
  try {
  } catch (error) {}
};
