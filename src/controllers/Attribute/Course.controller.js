import { courses } from "../../models/Attribute/AddCourse.model.js";

const AddCourse = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddCourse" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetCourse = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetCourse" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateCourse = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateCourse" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteCourse = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteCourse" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddCourse, UpdateCourse, GetCourse, DeleteCourse };
