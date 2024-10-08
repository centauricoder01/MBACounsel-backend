import { exam } from "../../models/Exam/Exam.model.js";
import Joi from "joi";
import mongoose from "mongoose";

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

export const getExamById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const examById = await exam.findById(id);

    if (!examById) {
      return res.status(404).json({ message: "Exam not found" });
    }

    return res.status(200).json({ message: "Exam available", exam: examById });
  } catch (error) {
    console.error("Error fetching exam:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateExam = async (req, res) => {
  try {
    const { id, mainEditExamData } = req.body;
    const exam = await mongoose.model("exam").findById(id);

    if (!exam) {
      return res.status(404).send({ message: "Exam not found" });
    }

    const allowedUpdates = Object.keys(mongoose.model("exam").schema.obj);
    const isValidOperation = Object.keys(mainEditExamData).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(mainEditExamData).forEach((update) => {
      exam[update] = mainEditExamData[update];
    });

    await exam.save();

    res.status(201).json({ message: "Exam updated successfully", exam });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteExam = async (req, res) => {
  try {
    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const deletedDocument = await exam.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.status(200).json({
      message: "Document deleted successfully",
      deletedDocument,
    });
  } catch (error) {
    console.error("Error deleting document:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};
