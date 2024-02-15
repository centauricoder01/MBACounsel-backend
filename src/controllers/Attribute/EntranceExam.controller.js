import { entranceExam } from "../../models/Attribute/AddEntranceExam.model.js";

const AddEntranceExam = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddEntranceExam" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetEntranceExam = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetEntranceExam" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateEntranceExam = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateEntranceExam" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteEntranceExam = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteEntranceExam" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddEntranceExam, UpdateEntranceExam, GetEntranceExam, DeleteEntranceExam };
