import { exam } from "../../models/Exam/Exam.model";
import mongoose from "mongoose";
import Joi from "joi";

export const addExam = async (req, res) => {
  try {
    const schema = Joi.object({
      examNameFullForm: Joi.string().required(),
      examNameShortForm: Joi.string().allow(""),
      examLogo: Joi.string().required(),
      examPdf: Joi.string().allow(""),
      examWordFile: Joi.string().allow(""),
      courses: Joi.array().items(Joi.string()).required(),
      examOverview: Joi.string().required(),
      examRegistration: Joi.string().required(),
      examEligibility: Joi.string().required(),
      examSyllabus: Joi.string().required(),
      examPattern: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    await exam.create(req.body);

    res.status(201).json({ message: "Exam Added" });
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getExam = async (req, res) => {
  try {
    const allExam = await exam.find();
    res.status(200).json({
      success: true,
      message: "All exams retrieved successfully",
      data: allExam,
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

export const updateExam = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteExam = async (req, res) => {
  try {
  } catch (error) {}
};
