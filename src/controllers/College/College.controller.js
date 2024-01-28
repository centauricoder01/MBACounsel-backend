import { college } from "../../models/College/college.model.js";

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
    res.status(201).json({ message: "All College Available" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateCollege = async (req, res) => {
  try {
    res.status(201).json({ message: "College Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deletecollege = async (req, res) => {
  try {
    res.status(201).json({ message: "College Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addCollege, getCollege, updateCollege, deletecollege };
