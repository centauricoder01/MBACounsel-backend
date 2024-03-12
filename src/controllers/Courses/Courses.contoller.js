import { detailedCourses } from "../../models/Courses/Courses.model.js";
import Joi from "joi";
import mongoose from "mongoose";

export const addDetailedCourse = async (req, res) => {
  try {
    const schema = Joi.object({
      courseTitle: Joi.string().required(),
      course: Joi.string().required(),
      specialization: Joi.string().required(),
      overview: Joi.string().required(),
      salientFeatures: Joi.string().required(),
      admission: Joi.string().required(),
      syllabus: Joi.string().required(),
      futureScope: Joi.string().required(),
      faqs: Joi.array()
        .items(
          Joi.object({
            question: Joi.string().required(),
            answer: Joi.string().required(),
          }),
        )
        .required(),
      slugUrl: Joi.string().required(),
      metaUrl: Joi.string().required(),
      metaDescription: Joi.string().required(),
      metaKeywords: Joi.string().required(),
      trendingCourses: Joi.boolean().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    await detailedCourses.create(req.body);

    res.status(201).json({ message: "Your Detailed Course Added" });
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getDetailedCourse = async (req, res) => {
  try {
    const allCourses = await detailedCourses.find();
    res.status(200).json({
      success: true,
      message: "All Courses retrieved successfully",
      data: allCourses,
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

export const getByIdDetailedCourse = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const coursesById = await detailedCourses.findById(id);

    if (!coursesById) {
      return res.status(404).json({ message: "Courses not found" });
    }

    return res
      .status(200)
      .json({ message: "Courses available", courses: coursesById });
  } catch (error) {
    console.error("Error fetching Course:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateDetailedCourse = async (req, res) => {
  try {
    const { id, maincourseedit } = req.body;
    const course = await mongoose.model("detailedcourses").findById(id);

    if (!course) {
      return res.status(404).send({ message: "Courses not found" });
    }

    const allowedUpdates = Object.keys(
      mongoose.model("detailedcourses").schema.obj,
    );

    const isValidOperation = Object.keys(maincourseedit).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(maincourseedit).forEach((update) => {
      course[update] = maincourseedit[update];
    });

    await course.save();

    res.status(201).json({ message: "Courses updated successfully", course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteDetailedCourse = async (req, res) => {
  try {
    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const deletedDocument = await detailedCourses.findByIdAndDelete(id);

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
