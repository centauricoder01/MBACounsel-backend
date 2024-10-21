import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Authentication } from "../../models/Authtication/Authtication.model.js";
import nodemailer from "nodemailer";

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNo: Joi.string().pattern(/^\d+$/).min(10).max(15).required(), // Phone as string to allow formatting
  location: Joi.string().required(),
  currentEducation: Joi.string().required(),
  courseLooking: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").default("user"),
});

const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

export const addAuthUser = async (req, res) => {
  try {
    // type checking of the body
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // checking if user already exist
    const existingUser = await Authentication.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Step 3: Hash the password
    const saltRounds = Number(process.env.GEN_SALT) || 10; // Default to 10 if GEN_SALT not set
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Step 4: Create the user
    const user = new Authentication({
      ...req.body,
      password: hashedPassword,
      emailVerified: false, // User should verify their email
    });

    // Step 5: Save the user to the database
    await user.save();

    sendVerificationMail(user.email);

    res.status(200).json({
      message:
        "User added successfully. Please check your email to verify your account.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
export const loginAuthUser = async (req, res) => {
  try {
    // Validate incoming data
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user = await Authentication.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const validPassword = bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate a JWT
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
        algorithm: "HS256", // Explicit algorithm
      }
    );

    // Send a sanitized user object and token

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS in production
      sameSite: "Strict",
      maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
    });

    // Send back user data, but exclude sensitive information like passwords
    return res.status(200).json({
      message: "Login successful",
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifyMail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await Authentication.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const currentTime = Date.now();

    if (user.otp !== otp || otp === null) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < currentTime) {
      return res.status(400).json({ message: "OTP Has Expired" });
    }

    user.emailVerified = true;
    user.otp = null; // Clear the OTP after successful verification
    user.otpExpiry = null; // Clear the OTP expiry after successful verification
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Some Error occured", error });
  }
};

export const getAuthUser = async (req, res) => {
  try {
    const allUsers = await Authentication.find();
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

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const findUserByEmail = await Authentication.findOne({ email });
    if (!findUserByEmail) {
      return res
        .status(400)
        .json({ message: "User Not found with this Email" });
    }

    // MAIN LOGIN FOR SENDING MAIL START FROM HERE

    const fromemail = process.env.MAIL_USERNAME;
    const pass = process.env.MAIL_PASSWORD;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromemail,
        pass: pass,
      },
    });

    let mailOptions = {
      from: {
        name: "mbaCounsel",
        address: fromemail,
      },
      to: email,
      subject: "Account ID and Password",
      text: `This is your User Id : ${email} and  Password : ${findUserByEmail.password} .`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.send({ message: error });
      } else {
        res.send({
          status: info.response,
          message: "Email send sucessfully to the user",
        });
      }
    });
  } catch (error) {
    res.json(500).send({ message: "some Error occured", error });
  }
};

export const deleteAuthUser = async (req, res) => {
  try {
  } catch (error) {}
};

const sendVerificationMail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const randomOTP = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

    const updatedUser = await Authentication.findOneAndUpdate(
      { email },
      { otp: randomOTP, otpExpiry }, // Storing OTP and its expiry
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    const mailOptions = {
      from: {
        name: "MBACounsel",
        address: process.env.MAIL_USERNAME,
      },
      to: email,
      subject: "Verification Mail",
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 20px; text-align: center; border-radius: 8px;">
    <h1 style="color: #333;">Verify Your Email Address</h1>
    <h2 style="background-color: #f0f4ff; padding: 15px; display: inline-block; font-size: 28px; font-weight: bold; color: #2d3e50; border-radius: 8px; letter-spacing: 4px;">
      ${randomOTP}
    </h2>
    <p style="font-size: 16px; line-height: 1.6; margin: 20px 0;">Please do not share this OTP with anyone. It is valid for 10 minutes.</p>
    <p style="font-size: 16px; line-height: 1.6;">Enter this OTP to verify your email...</p>
    <footer style="margin-top: 30px; font-size: 14px; color: #a0a3ab;">
      <p>&copy; 2024 mbaCounsel. All rights reserved.</p>
    </footer>
  </div>
`,
    };

    const info = transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Verification email sent successfully",
      info,
    };
  } catch (error) {
    console.error("Error sending verification mail:", error);
    throw new Error("Unable to send verification email");
  }
};
