import { collegeType } from "../../models/Attribute/AddCollegeType.model.js";

const AddCollegeType = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddCollegeType" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetCollegeType = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetCollegeType" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateCollegeType = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateCollegeType" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteCollegeType = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteCollegeType" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddCollegeType, UpdateCollegeType, GetCollegeType, DeleteCollegeType };
