import { specilization } from "../../models/Attribute/AddSpecilization.model.js";

const AddSpecilization = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddSpecilization" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetSpecilization = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetSpecilization" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateSpecilization = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateSpecilization" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteSpecilization = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteSpecilization" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddSpecilization, UpdateSpecilization, GetSpecilization, DeleteSpecilization };
