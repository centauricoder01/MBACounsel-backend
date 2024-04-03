import { Inquiry } from "../../models/Inquiry/Inquiry.model.js";
import nodemailer from "nodemailer";

const addInquiry = async (req, res) => {
  try {
    const { name, email, phoneNo, location, courseLooking, college } = req.body;

    if (!(name || email || phoneNo || location || courseLooking || college)) {
      return res.status(400).json({ message: "All feilds are requried" });
    }

    await Inquiry.create(req.body);

    // sending mail to the mail database

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
        name: "MbaCounsel",
        address: fromemail,
      },
      to: "cityeduguide@gmail.com",
      subject: "MbaCounsel Inquiry Detail",
      html: `<table width='60%' style='border:1px solid black;'>
                  <th style='background-color:#0051A4;color:#FFFFFF;text-align: center;'>Description</th>
                  <th style='background-color:#0051A4;color:#FFFFFF;text-align: center;'>Value</th>
                  
                  <tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Name</td>
                    <td>${name}</td>
                  </tr>
                  
                  <tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Email Id</td>
                    <td>${email}</td>
                  </tr>
                  
                  <tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Phone</td>
                    <td>${phoneNo}</td> 
                  </tr>
                  
                  <tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Location</td>
                    <td>${location}</td> 
                  </tr>

                  <tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Course</td>
                    <td>${courseLooking}</td> 
                  </tr>

                  <tr style='background-color:#AAD4FF;'>
                    <td width='65%'>college</td>
                    <td>${college}</td> 
                  </tr>
                  </table>`,
    };

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

const getInquiry = async (req, res) => {
  try {
    const allInquiryDetails = await Inquiry.find();
    res.status(200).json({
      success: true,
      message: "All Inquiry details fetched successfully",
      data: allInquiryDetails,
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

export { addInquiry, getInquiry };
