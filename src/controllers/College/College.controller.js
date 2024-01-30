import { college } from "../../models/College/college.model.js";
import mongoose from "mongoose";

const addCollege = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    await college.create(body);
    res.status(201).json({ message: "College Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getCollege = async (req, res) => {
  try {
    const allCollege = await college.find();
    res.status(201).json({ message: "All College Available", allCollege });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getCollegeById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const collegeById = await college.findById(id);
    console.log(collegeById);
    res.status(201).json({ message: "College Available", collegeById });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateCollege = async (req, res) => {
  try {
    const { id, updates } = req.body;
    const college = await mongoose.model("college").findById(id);

    if (!college) {
      return res.status(404).send({ message: "College not found" });
    }

    const allowedUpdates = Object.keys(mongoose.model("college").schema.obj);
    console.log(allowedUpdates, "AllowedUpdates");
    const isValidOperation = Object.keys(updates).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(updates).forEach((update) => {
      college[update] = updates[update];
    });

    await college.save();

    res.send({ message: "College updated successfully", college });

    res.status(201).json({ message: "College Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deletecollege = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await college.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res
      .status(201)
      .json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addCollege, getCollege, updateCollege, deletecollege, getCollegeById };
